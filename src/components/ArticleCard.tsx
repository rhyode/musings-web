import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category?: string;
}

export const ArticleCard = ({ title, excerpt, date, readTime, category }: ArticleCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (title === "Creatine : physical and cognitive elixir") {
      navigate("/articles/creatine-guide");
    }
  };

  return (
    <Card 
      className="group cursor-pointer bg-card border-border hover:shadow-elevated transition-all duration-300 overflow-hidden"
      onClick={handleClick}
    >
      <div className="p-6">
        {category && (
          <span className="inline-block text-xs font-medium text-text-accent bg-accent/20 px-2 py-1 rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="font-serif text-xl font-medium text-text-primary mb-3 group-hover:text-text-accent transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <time dateTime={date}>{date}</time>
          <span>{readTime}</span>
        </div>
      </div>
    </Card>
  );
};