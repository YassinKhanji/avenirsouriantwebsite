import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { useI18n } from "../i18n";
import { getActivities } from "../data/programs";

export default function ActivityDetail() {
  const { t, lang } = useI18n();
  const activities = useMemo(() => getActivities(t), [t, lang]);
  const { id } = useParams();
  const activity = activities.find(a => a.id === parseInt(id || "0"));

  if (!activity) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("activityDetail.notFound")}</h1>
        <Link to="/activities" className="text-primary hover:underline">{t("activityDetail.back")}</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`${activity.gradient} py-20 text-white`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/activities" className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2">
              ← {t("activityDetail.back")}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{activity.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{activity.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Activity Info Cards */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{t("activityDetail.duration")}</span>
              </div>
              <p className="text-2xl font-bold">{activity.duration}</p>
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
                <span className="text-muted-foreground">{t("activityDetail.age")}</span>
              </div>
              <p className="text-2xl font-bold">{activity.ageGroup}</p>
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
                <span className="text-muted-foreground">{t("activityDetail.category")}</span>
              </div>
              <p className="text-2xl font-bold capitalize">{activity.category}</p>
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
            <h2 className="text-3xl font-bold mb-6">{t("activityDetail.about")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {activity.fullDescription}
            </p>

            <h3 className="text-2xl font-bold mb-6">{t("activityDetail.highlights")}</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {activity.highlights.map((highlight, index) => (
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("activityDetail.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("activityDetail.cta.desc")}
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEgAjYtASRQV5OY5J8GMCbKgxdMuauq6fj8t-jU-A4vX3HHg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span>{t("activityDetail.cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
