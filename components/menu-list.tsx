"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Gama Alta",
    href: "/category/Gama Alta",
    description:
      "Laptops diseñadas para los jugadores más exigentes y profesionales de eSports. Estas máquinas cuentan con los últimos procesadores, tarjetas gráficas de alto rendimiento (RTX 4080, RTX 4090), pantallas con altas tasas de refresco y sistemas de refrigeración avanzados. Son ideales para gaming competitivo, streaming en 4K y edición de video profesional.Laptops diseñadas para los jugadores más exigentes y profesionales de eSports. Estas máquinas cuentan con los últimos procesadores, tarjetas gráficas de alto rendimiento (RTX 4080, RTX 4090), pantallas con altas tasas de refresco y sistemas de refrigeración avanzados. Son ideales para gaming competitivo, streaming en 4K y edición de video profesional.",
  },
  {
    title: "Gama Media/Alta",
    href: "/category/Gama Media/Alta",
    description:
      "Equipos equilibrados que ofrecen un gran rendimiento para gaming en 1080p o 1440p con configuraciones gráficas altas. Incorporan procesadores Intel Core i7 o AMD Ryzen 7, GPUs como RTX 4060 o RTX 4070 y pantallas con refresco de 144Hz o superior. Perfectas para jugadores que buscan calidad sin gastar en una configuración extrema.",
  },
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      NexusCore
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Bienvenido a Nexus Core, el destino definitivo para los gamers que buscan potencia, rendimiento y tecnología de vanguardia. Nos especializamos en laptops de gama media-alta y alta, ofreciendo solo lo mejor en hardware para jugadores, creadores de contenido y profesionales que exigen máximo desempeño.
                    </p>
                  </Link>
                </NavigationMenuLink>

              </li>
              <ListItem href="/Shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/Offers" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Accesorios útiles para llevar tu experiencia a otro nivel.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Laptops</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MenuList