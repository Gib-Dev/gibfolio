'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from './Logo';

const inActiveStyle = 'text-white/50 hover:text-white/80 hover:bg-white/10';
const activeStyle = 'bg-white/20 text-white';

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState<NavItem[]>([
    { name: 'Home', href: '/', isActive: true },
    { name: 'About', href: '/#about', isActive: false },
    { name: 'Videos', href: '/#videos', isActive: false },
    { name: 'Projects', href: '/#projects', isActive: false },
    { name: 'Blog', href: '/posts', isActive: false },
  ]);

  const setActiveNavItem = (selected: string) => {
    setNavMenu((items) =>
      items.map((item) => ({
        ...item,
        isActive: item.name === selected,
      })),
    );
  };

  return (
    <div className="mx-auto max-w-[1440px]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo visible en desktop ou mobile si menu fermé */}
          {!mobileMenuOpen && (
            <div className="flex lg:flex">
              <Logo />
            </div>
          )}

          {/* Desktop nav */}
          <div className="hidden gap-6 rounded-full bg-white/10 px-6 py-2 text-sm font-medium lg:flex">
            {navMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveNavItem(item.name)}
                className={clsx(
                  'rounded-full px-4 py-1 transition-all',
                  item.isActive ? activeStyle : inActiveStyle,
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex w-full items-center justify-end lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="bg-bg-default fixed inset-0 z-50 bg-opacity-95 px-6 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              {navMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveNavItem(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className="text-xl text-white transition-all hover:text-ashgray"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog>
      </header>
    </div>
  );
}
