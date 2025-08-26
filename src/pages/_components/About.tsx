export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight">About</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate designer and developer who believes in the power of 
                minimalism and clean aesthetics. With a focus on user experience and 
                modern web technologies, I create digital solutions that are both 
                beautiful and functional.
              </p>
              <p>
                When I'm not coding or designing, you can find me exploring new 
                technologies, reading about design philosophy, or enjoying a good 
                cup of coffee while sketching ideas.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
              <span className="text-4xl font-light text-muted-foreground">MR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}