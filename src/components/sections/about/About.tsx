import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Artisan Excellence',
      description:
        'Every piece is meticulously handcrafted by skilled artisans using traditional techniques passed down through generations.',
    },
    {
      icon: Lightbulb,
      title: 'Unique Designs',
      description:
        'We create one-of-a-kind jewelry pieces that tell your story and reflect your individual style and personality.',
    },
    {
      icon: Heart,
      title: 'Sustainable Craft',
      description:
        'We source ethically-mined gemstones and recycled precious metals to create beautiful jewelry responsibly.',
    },
    {
      icon: Globe,
      title: 'Timeless Beauty',
      description:
        'Our jewelry transcends trends, creating heirloom pieces that will be treasured for generations to come.',
    },
  ];

  const stats = [
    { value: '2015', label: 'Established', icon: Award },
    { value: '3,200+', label: 'Happy Customers', icon: Users },
    { value: '100%', label: 'Handcrafted', icon: TrendingUp },
    { value: '15+', label: 'Master Artisans', icon: Globe },
  ];

  const team = [
    {
      name: 'Isabella Martinez',
      role: 'Master Jeweler & Founder',
      image: 'IM',
      bio: 'Third-generation jeweler specializing in vintage-inspired designs and precious stone setting.',
    },
    {
      name: 'Elena Rossi',
      role: 'Lead Designer',
      image: 'ER',
      bio: 'Award-winning designer creating contemporary pieces that blend modern aesthetics with classic elegance.',
    },
    {
      name: 'Sophia Chen',
      role: 'Gemstone Specialist',
      image: 'SC',
      bio: 'Certified gemologist with expertise in rare stones and ethical sourcing practices.',
    },
    {
      name: 'Maria Santos',
      role: 'Custom Design Director',
      image: 'MS',
      bio: 'Specializes in bespoke engagement rings and personalized jewelry commissions.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Dreams Into
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Timeless Treasures
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For over a decade, Artisan Jewel Co. has been creating exquisite handcrafted jewelry
            that celebrates life's most precious moments with unparalleled artistry and elegance.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by master jeweler Isabella Martinez, Artisan Jewel Co. began as a
                small studio workshop with a simple vision: to create jewelry that captures the
                essence of life's most meaningful moments.
              </p>
              <p>
                Drawing from three generations of jewelry-making expertise, we combine time-honored
                techniques with contemporary design sensibilities to craft pieces that are both
                timeless and uniquely personal.
              </p>
              <p>
                Today, our atelier houses fifteen master artisans who share our passion for
                excellence, creating bespoke pieces for discerning women who appreciate the artistry
                of handcrafted luxury.
              </p>
            </div>
            <Button className="group">
              Explore Our Collections
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every gemstone has a story, every setting holds a dream. We simply bring them
                      together."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Isabella Martinez, Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground">
              The principles that guide our craft and define our dedication to exceptional jewelry
              artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Master Artisans</h3>
            <p className="text-muted-foreground">
              Meet the talented craftspeople who bring passion, skill, and artistry to every piece
              we create.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "My custom engagement ring exceeded every expectation. The attention to detail and
                craftsmanship is absolutely breathtaking. It's truly a work of art I'll treasure
                forever."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  AR
                </div>
                <div className="text-left">
                  <div className="font-semibold">Amanda Richardson</div>
                  <div className="text-sm text-muted-foreground">Bride & Jewelry Collector</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
