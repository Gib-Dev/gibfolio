// Ce fichier est utilisé uniquement pour forcer Tailwind à générer les classes de couleur personnalisées
// Il ne sera jamais rendu dans l'application

export const DebugColors = () => {
  return (
    <div className="hidden">
      {/* Background colors */}
      <div className="bg-background"></div>
      <div className="bg-foreground"></div>
      <div className="bg-primary"></div>
      <div className="bg-secondary"></div>
      <div className="bg-muted"></div>
      <div className="bg-card"></div>
      <div className="bg-border"></div>

      {/* Text colors */}
      <div className="text-background"></div>
      <div className="text-foreground"></div>
      <div className="text-primary"></div>
      <div className="text-secondary"></div>
      <div className="text-muted"></div>

      {/* Border colors */}
      <div className="border-background"></div>
      <div className="border-foreground"></div>
      <div className="border-primary"></div>
      <div className="border-secondary"></div>
      <div className="border-muted"></div>
      <div className="border-border"></div>

      {/* Hover variants */}
      <div className="hover:bg-background hover:bg-foreground hover:bg-primary hover:bg-secondary hover:bg-muted"></div>
      <div className="hover:text-background hover:text-foreground hover:text-primary hover:text-secondary hover:text-muted"></div>
      <div className="hover:border-background hover:border-foreground hover:border-primary hover:border-secondary hover:border-muted hover:border-border"></div>

      {/* Focus variants */}
      <div className="focus:bg-background focus:bg-foreground focus:bg-primary focus:bg-secondary focus:bg-muted"></div>
      <div className="focus:text-background focus:text-foreground focus:text-primary focus:text-secondary focus:text-muted"></div>
      <div className="focus:border-background focus:border-foreground focus:border-primary focus:border-secondary focus:border-muted focus:border-border"></div>

      {/* Opacity variants */}
      <div className="bg-primary/10 bg-primary/20 bg-primary/30 bg-primary/40 bg-primary/50 bg-primary/60 bg-primary/70 bg-primary/80 bg-primary/90"></div>
      <div className="bg-secondary/10 bg-secondary/20 bg-secondary/30 bg-secondary/40 bg-secondary/50 bg-secondary/60 bg-secondary/70 bg-secondary/80 bg-secondary/90"></div>
      <div className="text-primary/10 text-primary/20 text-primary/30 text-primary/40 text-primary/50 text-primary/60 text-primary/70 text-primary/80 text-primary/90"></div>
      <div className="text-secondary/10 text-secondary/20 text-secondary/30 text-secondary/40 text-secondary/50 text-secondary/60 text-secondary/70 text-secondary/80 text-secondary/90"></div>
      <div className="border-primary/10 border-primary/20 border-primary/30 border-primary/40 border-primary/50 border-primary/60 border-primary/70 border-primary/80 border-primary/90"></div>
      <div className="border-secondary/10 border-secondary/20 border-secondary/30 border-secondary/40 border-secondary/50 border-secondary/60 border-secondary/70 border-secondary/80 border-secondary/90"></div>

      {/* Dark mode variants */}
      <div className="dark:bg-background dark:bg-foreground dark:bg-primary dark:bg-secondary dark:bg-muted dark:bg-card dark:bg-border"></div>
      <div className="dark:text-background dark:text-foreground dark:text-primary dark:text-secondary dark:text-muted"></div>
      <div className="dark:border-background dark:border-foreground dark:border-primary dark:border-secondary dark:border-muted dark:border-border"></div>
    </div>
  );
};

export default DebugColors;
