'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Lightbulb, Loader2, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getLearningPathSuggestion } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const initialState = {
  suggestion: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2" />
          Suggest Next Lesson
        </>
      )}
    </Button>
  );
}

export function LearningPathCard() {
  const [state, formAction] = useFormState(getLearningPathSuggestion, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: state.error,
      })
    }
  }, [state.error, toast]);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Your Personalized Learning Path</CardTitle>
        <CardDescription>
          Let our AI assistant suggest the best next step in your learning journey.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center items-center text-center">
        {state.suggestion ? (
          <div className="w-full text-left animate-in fade-in-50 duration-500">
            <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>{state.suggestion.recommendedModule}</AlertTitle>
                <AlertDescription>
                    {state.suggestion.reasoning}
                </AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="mx-auto bg-secondary rounded-full p-3 w-fit">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">
              Click the button below to get your next lesson recommendation.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <form action={formAction} className="w-full">
          <SubmitButton />
        </form>
      </CardFooter>
    </Card>
  );
}
