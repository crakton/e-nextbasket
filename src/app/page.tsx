import { CallToAction } from "@/ui/call-action.ui";
import { Testimonials } from "@/ui/testimonial.ui";
import { Products } from "@/ui/products.ui";
import { Services } from "@/ui/services.ui";
import { FeaturedPost } from "@/ui/featured-post.ui";
import { Hero } from "@/ui/hero.ui";

export default function LandingPage() {
  return (
    <div className="w-full overflow-hidden">
      {/* === Hero === */}
      <Hero />

      {/* === Products === */}
      <Products />

      {/* === Services === */}
      <Services />

      {/* === Features === */}
      <FeaturedPost />

      {/* === Testimonials === */}
      <Testimonials />

      {/* === Call to actions === */}
      <CallToAction />
    </div>
  );
}
