import { useRef, useState } from 'react';

import * as S from './faqSection.style';

import QuestionIcon from '@/assets/icons/question.svg?react';

interface Props {
  question: string;
  answer: React.ReactNode;
}

export default function FaqItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <S.Item>
      <S.Question onClick={() => setIsOpen((prev) => !prev)}>
        <S.QuestionText>
          <QuestionIcon />
          <span>{question}</span>
        </S.QuestionText>
        <S.Toggle>{isOpen ? '−' : '+'}</S.Toggle>
      </S.Question>

      <S.SlideContainer
        $isOpen={isOpen}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div ref={contentRef}>
          <S.Answer>{answer}</S.Answer>
        </div>
      </S.SlideContainer>
    </S.Item>
  );
}
