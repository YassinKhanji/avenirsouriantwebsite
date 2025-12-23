import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, Users, CheckCircle, Calendar, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState, useEffect } from "react";
import { useI18n } from "../i18n";
import { getCourses } from "../data/programs";

export default function CourseDetail() {
  const { t, lang } = useI18n();
  const courses = useMemo(() => getCourses(t), [t, lang]);
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id || "0"));
  const [backendCourses, setBackendCourses] = useState<{id:number;spots_left:number}[]>([]);
  
  useEffect(() => {
    fetch('/api/courses')
      .then(async r => {
        if (!r.ok) throw new Error('Failed to load courses');
        return r.json();
      })
      .then(setBackendCourses)
      .catch(() => setBackendCourses([]));
  }, []);
  
  const dynamicSpots = backendCourses.find(c => c.id === parseInt(id || "0"))?.spots_left ?? course?.spotsLeft ?? 0;

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("courseDetail.notFound")}</h1>
        <Link to="/courses" className="text-primary hover:underline">{t("courseDetail.back")}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`${course.gradient} py-20 text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/courses" className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2">
              ← {t("courseDetail.back")}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{course.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Course Info Cards */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("courseDetail.duration")}</span>
              </div>
              <p className="text-2xl font-bold">{course.duration}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("courseDetail.age")}</span>
              </div>
              <p className="text-2xl font-bold">{course.ageGroup}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("courseDetail.category")}</span>
              </div>
              <p className="text-2xl font-bold capitalize">{course.category}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("courseDetail.startDate")}</span>
              </div>
              <p className="text-xl font-bold">{course.nextStartDate}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`bg-background rounded-lg p-6 border ${
                dynamicSpots <= 5 ? "border-red-500/30 bg-red-500/5" : "border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className={`w-5 h-5 ${dynamicSpots <= 5 ? "text-red-600" : "text-primary"}`} />
                <span className="text-muted-foreground">{t("courseDetail.spotsLeft")}</span>
              </div>
              <p className={`text-2xl font-bold ${dynamicSpots <= 5 ? "text-red-600" : ""}`}>
                {dynamicSpots}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("courseDetail.about")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {course.fullDescription}
            </p>

            <h3 className="text-2xl font-bold mb-6">{t("courseDetail.learn")}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {course.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Curriculum Section */}
            <h3 className="text-2xl font-bold mb-6">{t("courseDetail.curriculum")}</h3>
            <div className="space-y-3 mb-12">
              {course.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Requirements Section */}
            <h3 className="text-2xl font-bold mb-6">{t("courseDetail.requirements")}</h3>
            <div className="space-y-3">
              {course.requirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-lg">{requirement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("courseDetail.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("courseDetail.cta.desc")}
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span>{t("courseDetail.cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
