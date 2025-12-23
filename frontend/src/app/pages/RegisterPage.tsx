import { useMemo, useState } from "react";
import { useI18n } from "../i18n";
import { getCourses, getActivities } from "../data/programs";

export default function RegisterPage() {
  const { t, lang } = useI18n();
  const courses = useMemo(() => getCourses(t), [t, lang]);
  const activities = useMemo(() => getActivities(t), [t, lang]);
  const allPrograms = useMemo(() => [...courses, ...activities], [courses, activities]);
  const titleById = useMemo(() => Object.fromEntries(allPrograms.map(p => [p.id, p.title])), [allPrograms]);
  const openCourses = allPrograms;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [courseIds, setCourseIds] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  // Additional fields
  const [childName, setChildName] = useState("");
  const [childDob, setChildDob] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [signature, setSignature] = useState("");
  const [submittedDate, setSubmittedDate] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function toggleCourse(id: string) {
    setCourseIds(prev => 
      prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !name || !age || !phone || courseIds.length === 0 || !childName || !childDob || !parentName || !parentPhone || !emergencyPhone || !signature || !submittedDate) {
      setError("Please fill all required fields and select at least one course.");
      return;
    }
    setLoading(true);
    const registrationPromises = courseIds.map(cid => {
      const course = openCourses.find((c) => String(c.id) === cid);
      return fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          email,
          student_name: name,
          age: Number(age),
          phone,
          course_id: Number(cid),
          course_title: course ? course.title : '',
          comment,
          child_name: childName,
          child_dob: childDob,
          parent_name: parentName,
          parent_phone: parentPhone,
          emergency_phone: emergencyPhone,
          signature,
          submitted_date: submittedDate,
        }),
      }).then(async (r) => {
        if (!r.ok) {
          const data = await r.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to submit');
        }
        return r.json();
      });
    });
    
    Promise.all(registrationPromises)
      .then(() => {
        setSuccess(`Successfully registered for ${courseIds.length} course(s).`);
        setEmail('');
        setName('');
        setAge('');
        setPhone('');
        setCourseIds([]);
        setComment('');
        setChildName('');
        setChildDob('');
        setParentName('');
        setParentPhone('');
        setEmergencyPhone('');
        setSignature('');
        setSubmittedDate('');
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">{t("register.title")}</h1>
          <p className="text-muted-foreground mb-8">{t("register.required")}</p>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-8">
            {error && (
              <div className="rounded-lg border border-red-300 bg-red-50 text-red-700 p-3 text-sm">{error}</div>
            )}
            {success && (
              <div className="rounded-lg border border-green-300 bg-green-50 text-green-700 p-3 text-sm">{success}</div>
            )}
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.email")} *</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.studentName")} *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.age")} *</label>
                <input type="number" min={1} value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.phone")} *</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.course")} *</label>
              <div className="space-y-3">
                {openCourses.length > 0 ? (
                  openCourses.map((c) => (
                    <label key={c.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-primary hover:bg-opacity-10 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={courseIds.includes(String(c.id))}
                        onChange={() => toggleCourse(String(c.id))}
                        className="w-4 h-4 rounded cursor-pointer accent-primary"
                      />
                      <span className="flex-1">
                        {c.title}
                      </span>
                    </label>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No courses currently have available spots.</p>
                )}
              </div>
              {courseIds.length > 0 && (
                <p className="text-sm text-green-600 mt-3">Selected: {courseIds.length} course(s)</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">{t("register.childName")} *</label>
              <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.childDob")} *</label>
              <input type="date" value={childDob} onChange={(e) => setChildDob(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.parentName")} *</label>
              <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.parentPhone")} *</label>
                <input type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.emergencyPhone")} *</label>
                <input type="tel" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.signature")} *</label>
                <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">{t("register.currentDate")} *</label>
                <input type="date" value={submittedDate} onChange={(e) => setSubmittedDate(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-3">{t("register.comment")}</label>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" rows={4} />
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl disabled:opacity-60 cursor-pointer hover:cursor-pointer">
                {t("register.submit")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
