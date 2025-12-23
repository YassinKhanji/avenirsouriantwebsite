import { useEffect, useState } from "react";

export default function AdminRegistrations() {
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch('/api/registrations')
      .then(async r => {
        if (!r.ok) throw new Error('Failed to load registrations');
        return r.json();
      })
      .then(setRows)
      .catch(e => setError(e.message));
  }, []);

  const downloadCsv = () => {
    window.location.href = '/api/registrations.csv';
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Registrations</h1>
            <button onClick={downloadCsv} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Export CSV</button>
          </div>
          {error && (<div className="rounded-lg border border-red-300 bg-red-50 text-red-700 p-3 text-sm mb-4">{error}</div>)}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="p-2 border-b">Created</th>
                  <th className="p-2 border-b">Student</th>
                  <th className="p-2 border-b">Age</th>
                  <th className="p-2 border-b">Phone</th>
                  <th className="p-2 border-b">Course</th>
                  <th className="p-2 border-b">Child</th>
                  <th className="p-2 border-b">Parent</th>
                  <th className="p-2 border-b">Emergency</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b">
                    <td className="p-2">{r.created_at}</td>
                    <td className="p-2">{r.student_name}</td>
                    <td className="p-2">{r.age}</td>
                    <td className="p-2">{r.phone}</td>
                    <td className="p-2">{r.course_title} (#{r.course_id})</td>
                    <td className="p-2">{r.child_name} / {r.child_dob}</td>
                    <td className="p-2">{r.parent_name} / {r.parent_phone}</td>
                    <td className="p-2">{r.emergency_phone}</td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td className="p-4 text-muted-foreground" colSpan={8}>No registrations yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
