import { Coffee, Heart, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
            <Coffee className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Ein studentisches Projekt</span>
          </div>

          <h1 className="mb-6 text-balance font-sans text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Tu einfach mal etwas <span className="text-primary">Gutes</span>
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Wir sind Studenten vom GIF Studiengang und haben dir diesen Kaffeebecher geschenkt, um dich daran zu
            erinnern: Kleine Gesten können Großes bewirken. ☕️✨
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#holi-app">Entdecke die holi App</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="#about">Mehr erfahren</a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">Warum wir das machen</h2>
            <p className="text-pretty text-lg text-muted-foreground">Eine kleine Idee mit großer Wirkung</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Gutes tun ist einfach</h3>
              <p className="text-pretty text-muted-foreground">
                Manchmal braucht es nur einen kleinen Anstoß, um jemandem den Tag zu verschönern. Ein Lächeln, eine
                nette Geste – das kostet nichts.
              </p>
            </Card>

            <Card className="p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Inspiration weitergeben</h3>
              <p className="text-pretty text-muted-foreground">
                Wir glauben daran, dass gute Taten ansteckend sind. Wenn du heute etwas Gutes tust, inspirierst du
                vielleicht jemand anderen, es dir gleichzutun.
              </p>
            </Card>

            <Card className="p-6 transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Gemeinsam stärker</h3>
              <p className="text-pretty text-muted-foreground">
                Als Studenten vom GIF Studiengang wollen wir zeigen, dass jeder – egal wie klein – einen positiven
                Unterschied machen kann. Zusammen können wir die Welt ein bisschen besser machen.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Holi App Section */}
      <section id="holi-app" className="bg-gradient-to-br from-secondary/5 to-primary/5 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Empfehlung</span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-5xl">
              Entdecke die <span className="text-secondary">holi</span> App
            </h2>

            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              holi ist die perfekte App, um gute Taten zu planen, zu teilen und andere zu inspirieren. Ob kleine Gesten
              oder große Aktionen – mit holi wird Gutes tun zum Erlebnis.
            </p>

            <Card className="mb-8 p-8 text-left">
              <h3 className="mb-4 text-xl font-semibold text-card-foreground">Was macht holi besonders?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-card-foreground">Ideen sammeln:</strong> Lass dich inspirieren von
                    unzähligen Möglichkeiten, Gutes zu tun
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-card-foreground">Community:</strong> Verbinde dich mit Gleichgesinnten und
                    teile deine Erlebnisse
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-card-foreground">Motivation:</strong> Verfolge deine guten Taten und bleib
                    motiviert
                  </span>
                </li>
              </ul>
            </Card>

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://holi.social" target="_blank" rel="noopener noreferrer">
                Zur holi App
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">Mach mit! 🌟</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            Du hast diesen Becher kostenlos bekommen – als Zeichen dafür, dass kleine Gesten zählen. Jetzt bist du dran:
            Tu heute etwas Gutes, egal wie klein. Halte jemandem die Tür auf, verschenke ein Lächeln, oder teile diesen
            Becher mit jemandem, der ihn brauchen könnte.
          </p>
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
            <p className="text-balance text-xl font-medium text-foreground">
              "Die besten Dinge im Leben sind nicht die, die man für Geld bekommt."
            </p>
            <p className="mt-2 text-sm text-muted-foreground">– Albert Einstein</p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-4 py-8">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Ein Projekt von Studenten des{" "}
            <a
              href="https://www.hs-bremerhaven.de/Gruendung-Innovation-Fuehrung"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              GIF Studiengangs
            </a>
            , die an die Kraft kleiner Gesten glauben.
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            Dieser Becher wurde mit Liebe verteilt – gib die Liebe weiter!
          </p>
        </div>
      </footer>
    </main>
  )
}
