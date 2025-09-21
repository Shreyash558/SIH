import type { LucideIcon } from 'lucide-react';
import { Award, BarChart3, BookOpen, FileText, HelpCircle, PlayCircle } from 'lucide-react';

export type Stat = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  {
    title: 'Completed Lessons',
    value: '12',
    icon: Award,
  },
  {
    title: 'Active Courses',
    value: '3',
    icon: BookOpen,
  },
  {
    title: 'Average Score',
    value: '87%',
    icon: BarChart3,
  },
];

export type Lesson = {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  duration: string;
  imageId: string;
};

export const lessons: Lesson[] = [
    {
        id: '1',
        title: 'Introduction to Algebra',
        type: 'video',
        duration: '15 min',
        imageId: 'lesson-algebra-video',
    },
    {
        id: '2',
        title: 'Photosynthesis Explained',
        type: 'text',
        duration: '10 min read',
        imageId: 'lesson-photosynthesis-text',
    },
    {
        id: '3',
        title: 'World War II History Quiz',
        type: 'quiz',
        duration: '20 questions',
        imageId: 'lesson-ww2-quiz',
    },
    {
        id: '4',
        title: 'The Solar System',
        type: 'video',
        duration: '25 min',
        imageId: 'lesson-solar-system-video',
    },
];

export const getLessonIcon = (type: Lesson['type']): LucideIcon => {
    switch (type) {
        case 'video':
            return PlayCircle;
        case 'text':
            return FileText;
        case 'quiz':
            return HelpCircle;
    }
};
