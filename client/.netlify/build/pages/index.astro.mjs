import { c as createComponent, r as renderTemplate, d as renderSlot, e as renderHead, a as addAttribute, b as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CIuIpJ4l.mjs';
import 'kleur/colors';
import 'html-escaper';
import { clsx } from 'clsx';
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", "</head> <body> ", " <script>\n	const getThemePreference = () => {\n		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n			return localStorage.getItem('theme');\n		}\n		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';\n	};\n	const isDark = getThemePreference() === 'dark';\n	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');\n \n	if (typeof localStorage !== 'undefined') {\n		const observer = new MutationObserver(() => {\n			const isDark = document.documentElement.classList.contains('dark');\n			localStorage.setItem('theme', isDark ? 'dark' : 'light');\n		});\n		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });\n	}\n<\/script></body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/mohammed.lazhari/learning/challenges/explorations/astro/go-astro/client/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const apiURL = "https://astro-gofiber-production.up.railway.app";
  const response = await fetch(`${apiURL}/hello/Astro`);
  const data = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="border text-white rounded-lg max-w-7xl m-auto mt-8 p-12 flex flex-col justify-center items-center gap-3"> <h1 class="text-4xl">Astro + Go API</h1> <p>
Message From Go API: ${data.message} </p> ${renderComponent($$result2, "Button", Button, {}, { "default": ($$result3) => renderTemplate`Hello Shadcn UI` })} </div> ` })}`;
}, "/Users/mohammed.lazhari/learning/challenges/explorations/astro/go-astro/client/src/pages/index.astro", void 0);
const $$file = "/Users/mohammed.lazhari/learning/challenges/explorations/astro/go-astro/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
