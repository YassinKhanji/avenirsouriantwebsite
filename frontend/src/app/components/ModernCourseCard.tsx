import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

interface ModernCourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  ageGroup: string;
  duration: string;
  category: "language" | "activity";
  gradient: string;
  nextStartDate?: string;
  spotsLeft?: number;
  learnMoreTo?: string;
}

export function ModernCourseCard({ 
  title, 
  description, 
  icon: Icon, 
  ageGroup, 
  duration,
  category,
  gradient,
  nextStartDate,
  spotsLeft,
  learnMoreTo
}: ModernCourseCardProps) {
  const { t } = useI18n();
  
  const cardContent = (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-xl`} />
      
      <div className="relative bg-card border border-border rounded-3xl p-8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col cursor-pointer">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-2xl ${gradient} bg-opacity-10 mb-6 w-fit`}>
          <Icon className="w-8 h-8" style={{ 
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} />
        </div>
        
        {/* Badge */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs ${
            category === "language" 
              ? "bg-purple-500/10 text-purple-600" 
              : "bg-emerald-500/10 text-emerald-600"
          }`}>
            {category === "language" ? t("badge.language") : t("badge.activity")}
          </span>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>
        
        {/* Footer */}
        <div className="space-y-4">
          <div className="flex gap-6 text-sm flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-base">👥</span>
              <span>{ageGroup}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-base">⏱️</span>
              <span>{duration}</span>
            </div>
          </div>
          
          {nextStartDate && (
            <div className="flex gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-base">📅</span>
                <span>{nextStartDate}</span>
              </div>
            </div>
          )}
          
          <div className="flex flex-col gap-3">
            {learnMoreTo ? (
              <Link to={learnMoreTo} className="group/btn inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                <span>{t("common.learnMore")}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <button className="group/btn flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
                <span>{t("common.learnMore")}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (learnMoreTo) {
    return <Link to={learnMoreTo} className="no-underline">{cardContent}</Link>;
  }

  return cardContent;
}
