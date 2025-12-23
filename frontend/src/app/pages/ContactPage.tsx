import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "../i18n";

export default function ContactPage() {
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
            className="text-center"
          >
            <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("contact.hero.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">{t("contact.info.title")}</h2>

              <div className="space-y-8">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.email")}</h3>
                    <a
                      href="mailto:administration@avernisouriant.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all text-base"
                    >
                      administration@avernisouriant.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("contact.email.note")}
                    </p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.location")}</h3>
                    <p className="text-muted-foreground text-base">
                      1325 Rue Cartier<br />
                      Saint-Laurent, QC H4L 2N6<br />
                      Canada
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t("contact.phone")}</h3>
                    <a
                      href="tel:+15145154492"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      (514) 515-4492
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold mb-4 text-lg">{t("contact.hours")}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t("contact.hours.weekdays")}</p>
                  <p>{t("contact.hours.saturday")}</p>
                  <p>{t("contact.hours.sunday")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">{t("contact.map.title")}</h2>
            <p className="text-muted-foreground mb-8">
              {t("contact.map.desc")}
            </p>
            <a
              href="https://maps.google.com/?q=1325+Rue+Cartier+Saint-Laurent+Quebec+H4L+2N6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:bg-primary/90"
            >
              {t("contact.map.button")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t("contact.faq.title")}</h2>
            <p className="text-muted-foreground">{t("contact.faq.subtitle")}</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: t("contact.faq.q1"),
                a: t("contact.faq.a1")
              },
              {
                q: t("contact.faq.q2"),
                a: t("contact.faq.a2")
              },
              {
                q: t("contact.faq.q3"),
                a: t("contact.faq.a3")
              },
              {
                q: t("contact.faq.q5"),
                a: t("contact.faq.a5")
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="font-semibold mb-2 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
