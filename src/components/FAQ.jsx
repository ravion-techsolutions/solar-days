import { useState } from 'react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { faqs } from '../data/faq';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section bg-mist">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions we can help with"
            copy="A few straightforward answers about solar energy and how to begin with Solar Days."
          />
          <a
            href={buildWhatsAppUrl('Hello Solar Days, I have a question about solar energy.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-royal transition-colors hover:text-navy-900"
          >
            Ask us something else
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-line last:border-b-0">
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-mist/70 sm:px-7"
                    >
                      <span className="text-sm font-semibold text-navy-900 sm:text-[0.95rem]">{faq.question}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-royal">
                        {isOpen ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </h3>
                  {isOpen ? (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="px-5 pb-6 text-sm leading-7 text-muted sm:px-7"
                    >
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
