import { motion } from "motion/react";
import { CheckCircle, Target, Heart, Eye } from "lucide-react";
import { useI18n } from "../i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
              {t("about.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">{t("about.mission.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.mission.desc")}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-accent" />
                <h2 className="text-2xl font-bold">{t("about.vision.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.vision.desc")}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">{t("about.values.title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.values.desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("about.why.title")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("about.why.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: t("about.why.ai.title"),
                description: t("about.why.ai")
              },
              {
                title: t("about.why.instructors.title"),
                description: t("about.why.instructors")
              },
              {
                title: t("about.why.programs.title"),
                description: t("about.why.programs")
              },
              {
                title: t("about.why.community.title"),
                description: t("about.why.community")
              },
              {
                title: t("about.why.flexible.title"),
                description: t("about.why.flexible")
              },
              {
                title: t("about.why.results.title"),
                description: t("about.why.results")
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("about.team.title")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("about.team.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: t("about.team.role1.title"),
                description: t("about.team.role1")
              },
              {
                role: t("about.team.role2.title"),
                description: t("about.team.role2")
              },
              {
                role: t("about.team.role3.title"),
                description: t("about.team.role3")
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 border border-border text-center"
              >
                <h3 className="font-semibold mb-2 text-lg">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: t("about.stats.students") },
              { number: "15+", label: t("about.stats.instructors") },
              { number: "98%", label: t("about.stats.satisfaction") },
              { number: "10+", label: t("about.stats.programs") }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">{t("about.commitment.title")}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.commitment.desc1")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.commitment.desc2")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
