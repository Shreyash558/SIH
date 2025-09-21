import Image from 'next/image';
import { lessons, getLessonIcon } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Download } from 'lucide-react';
import { Badge } from '../ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function InteractiveLessons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue Learning</CardTitle>
        <CardDescription>
          Pick up where you left off with your interactive lessons.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {lessons.map((lesson) => {
          const Icon = getLessonIcon(lesson.type);
          const placeholder = PlaceHolderImages.find(p => p.id === lesson.imageId);
          return (
            <div
              key={lesson.id}
              className="flex flex-col sm:flex-row items-center gap-4 rounded-lg border p-4 hover:bg-card/80 transition-colors"
            >
              <div className="relative h-32 w-full sm:w-48 sm:h-28 rounded-md overflow-hidden shrink-0">
                {placeholder && (
                    <Image
                    src={placeholder.imageUrl}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                    data-ai-hint={placeholder.imageHint}
                    />
                )}
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="capitalize mb-2">
                  <Icon className="mr-1.5" />
                  {lesson.type}
                </Badge>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {lesson.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1.5" />
                  <span>{lesson.duration}</span>
                </div>
              </div>
              <div className="flex w-full sm:w-auto sm:flex-col items-center gap-2">
                <Button className="w-full sm:w-auto">Start Lesson</Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-5 w-5" />
                  <span className="sr-only">Download lesson</span>
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
