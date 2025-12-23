import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ModernCourseCard } from "../components/ModernCourseCard";
import { useMemo, useState, useEffect } from "react";
import { useI18n } from "../i18n";
import { getActivities } from "../data/programs";

export default function ActivitiesPage() {
  const { t, lang } = useI18n();
  const activities = useMemo(() => getActivities(t), [t, lang]);
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
  
  const spotsByIdMap = useMemo(() => 
    Object.fromEntries(backendCourses.map(c => [c.id, c.spots_left])), 
    [backendCourses]
  );
  
  const activitiesWithDynamicSpots = useMemo(() => 
    activities.map(a => ({
      ...a,
      spotsLeft: spotsByIdMap[a.id] !== undefined ? spotsByIdMap[a.id] : a.spotsLeft
    })),
    [activities, spotsByIdMap]
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
              {t("activitiesPage.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("activitiesPage.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activitiesWithDynamicSpots.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/activity/${activity.id}`} className="block h-full">
                  <ModernCourseCard {...activity} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{t("activitiesPage.benefits.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("activitiesPage.benefits.desc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("activitiesPage.benefits.physical.title"),
                description: t("activitiesPage.benefits.physical.desc")
              },
              {
                title: t("activitiesPage.benefits.stem.title"),
                description: t("activitiesPage.benefits.stem.desc")
              },
              {
                title: t("activitiesPage.benefits.social.title"),
                description: t("activitiesPage.benefits.social.desc")
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 border border-border"
              >
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("activitiesPage.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("activitiesPage.cta.desc")}
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 group"
            >
              <span>{t("activitiesPage.cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
