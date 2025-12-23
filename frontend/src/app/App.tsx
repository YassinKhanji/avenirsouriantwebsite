import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ModernCourseCard } from "./components/ModernCourseCard";
import { HeroIllustration } from "./components/HeroIllustration";
import { FeatureIllustration } from "./components/FeatureIllustration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useI18n } from "./i18n";
import { getCourses, getActivities } from "./data/programs";
import InlineSubscribe from "./components/InlineSubscribe";
import { config } from "./config";

export default function App() {
  const { t, lang } = useI18n();
  const courses = useMemo(() => getCourses(t), [t, lang]);
  const displayCourses = courses;
  const activities = useMemo(() => getActivities(t), [t, lang]);
  const activitiesWithDynamicSpots = activities;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Center content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">{t("hero.badge")}</span>
                </span>
              </div>
              
              <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-inter text-6xl lg:text-7xl font-bold">
                {t("hero.title")}
              </h1>
              
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-inter">
                {t("hero.description")}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/courses"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>{t("hero.cta.courses")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
                >
                  {t("hero.cta.about")}
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t("why.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("why.subtitle")}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t("why.programs.title"),
                description: t("why.programs.desc"),
                type: "soccer" as const,
              },
              {
                title: 'Robotics & Coding Club',
                description: 'Hands-on robotics and programming classes',
                type: "robotics" as const,
              },
              {
                title: 'Enriching Activities',
                description: 'Extracurricular programs to develop new skills and interests',
                type: "soccer" as const,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <motion.div 
                  className="w-32 h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <FeatureIllustration type={feature.type} />
                </motion.div>
                <h3 className="text-center mb-3">{feature.title}</h3>
                <p className="text-center text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses and Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{t("programs.heading")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("programs.subheading")}
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-3 h-12 rounded-2xl">
                <TabsTrigger value="all" className="rounded-xl">{t("programs.tabs.all")}</TabsTrigger>
                <TabsTrigger value="courses" className="rounded-xl">{t("programs.tabs.courses")}</TabsTrigger>
                <TabsTrigger value="activities" className="rounded-xl">{t("programs.tabs.activities")}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-16">
              {/* Language Courses */}
              <div>
                <div className="mb-8">
                  <h2 className="mb-2">{t("programs.courses.heading")}</h2>
                  <p className="text-muted-foreground">
                    {t("programs.courses.sub")}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                  {displayCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <ModernCourseCard {...course} learnMoreTo={`/course/${course.id}`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <div className="mb-8">
                  <h2 className="mb-2">{t("programs.activities.heading")}</h2>
                  <p className="text-muted-foreground">
                    {t("programs.activities.sub")}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                  {activitiesWithDynamicSpots.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <ModernCourseCard {...activity} learnMoreTo={`/activity/${activity.id}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {displayCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <ModernCourseCard {...course} learnMoreTo={`/course/${course.id}`} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {activitiesWithDynamicSpots.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <ModernCourseCard {...activity} learnMoreTo={`/activity/${activity.id}`} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Inline Updates Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <InlineSubscribe />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6">{t("home.cta.title")}</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("home.cta.desc")}
            </p>
            <a
              href={config.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <span>{t("home.cta.button")}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}