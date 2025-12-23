import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n";
import { getCourses } from "../data/programs";

export default function RegisterPage() {
  const { t, lang } = useI18n();
  const courses = useMemo(() => getCourses(t), [t, lang]);
  const [backendCourses, setBackendCourses] = useState<{id:number;spots_left:number}[]>([]);
  useEffect(() => {
    fetch('/api/courses')
      .then(async r => {
        if (!r.ok) throw new Error('Failed to load courses');
        return r.json();
      })
      .then(setBackendCourses)
      .catch(() => setBackendCourses([]));
  }, [lang]);
  const titleById = useMemo(() => Object.fromEntries(courses.map(c => [c.id, c.title])), [courses]);
  const openCourses = backendCourses.filter(c => c.spots_left > 0).map(c => ({ id: c.id, title: titleById[c.id] || `Course ${c.id}`, spotsLeft: c.spots_left }));

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [courseId, setCourseId] = useState<string>("");
  const [comment, setComment] = useState("");
  // Additional fields
  const [childName, setChildName] = useState("");
  const [childDob, setChildDob] = useState("");
  const [date, setDate] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [signature, setSignature] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !name || !age || !phone || !courseId || !childName || !childDob || !parentName || !parentPhone || !emergencyPhone || !signature || !currentDate) {
      setError("Please fill all required fields.");
      return;
    }
    const course = openCourses.find((c) => String(c.id) === courseId);
    setLoading(true);
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lang,
        email,
        student_name: name,
        age: Number(age),
        phone,
        course_id: Number(courseId),
        course_title: course ? course.title : '',
        comment,
        child_name: childName,
        child_dob: childDob,
        date,
        parent_name: parentName,
        parent_phone: parentPhone,
        emergency_phone: emergencyPhone,
        signature,
        current_date: currentDate,
      }),
    })
      .then(async (r) => {
        if (!r.ok) {
          const data = await r.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to submit');
        }
        return r.json();
      })
      .then((data) => {
        setSuccess('Registration submitted successfully.');
        setEmail('');
        setName('');
        setAge('');
        setPhone('');
        setCourseId('');
        setComment('');
        setChildName('');
        setChildDob('');
        setDate('');
        setParentName('');
        setParentPhone('');
        setEmergencyPhone('');
        setSignature('');
        setCurrentDate('');
        // refresh courses to reflect new spots left
        fetch('/api/courses').then(r => r.json()).then(setBackendCourses).catch(() => {});
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
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-10">
            {error && (
              <div className="rounded-lg border border-red-300 bg-red-50 text-red-700 p-3 text-sm">{error}</div>
            )}
            {success && (
              <div className="rounded-lg border border-green-300 bg-green-50 text-green-700 p-3 text-sm">{success}</div>
            )}
            <div>
              <label className="block text-sm mb-2">{t("register.email")} *</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div>
              <label className="block text-sm mb-2">{t("register.studentName")} *</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">{t("register.age")} *</label>
                <input type="number" min={1} value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm mb-2">{t("register.phone")} *</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">{t("register.course")} *</label>
              <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required>
                <option value="" disabled>Select a course</option>
                {openCourses.map((c) => (
                  <option key={c.id} value={String(c.id)}>
                    {c.title} ({c.spotsLeft} spots left)
                  </option>
                ))}
              </select>
              {openCourses.length === 0 && (
                <p className="text-sm text-muted-foreground mt-2">No courses currently have available spots.</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">{t("register.comment")}</label>
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" rows={4} />

            {/* Additional fields */}
            <div>
              <label className="block text-sm mb-2">{t("register.childName")} *</label>
              <input type="text" value={childName} onChange={(e) => setChildName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">{t("register.childDob")} *</label>
                <input type="date" value={childDob} onChange={(e) => setChildDob(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm mb-2">{t("register.date")}</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">{t("register.parentName")} *</label>
              <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">{t("register.parentPhone")} *</label>
                <input type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm mb-2">{t("register.emergencyPhone")} *</label>
                <input type="tel" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">{t("register.signature")} *</label>
                <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
              <div>
                <label className="block text-sm mb-2">{t("register.currentDate")} *</label>
                <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} className="w-full rounded-lg border border-border bg-background p-3" required />
              </div>
            </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="px-6 py-3 bg-primary text-primary-foreground rounded-xl disabled:opacity-60">
                {t("register.submit")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
