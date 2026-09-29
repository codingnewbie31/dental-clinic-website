export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through our appointment page, call us directly, or visit the clinic in person.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, we accept walk-ins, but we recommend booking an appointment to minimize waiting time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major debit/credit cards, and bank transfers. Easy installment plans are available for major treatments.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, we have free parking available for all patients right outside the clinic.",
  },
];