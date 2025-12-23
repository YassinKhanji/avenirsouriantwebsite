import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  ageGroup: string;
  duration: string;
  category: "language" | "activity";
}

export function CourseCard({ 
  title, 
  description, 
  image, 
  icon: Icon, 
  ageGroup, 
  duration,
  category 
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={category === "language" ? "default" : "secondary"}>
            {category === "language" ? "Language Course" : "Activity"}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>{ageGroup}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
