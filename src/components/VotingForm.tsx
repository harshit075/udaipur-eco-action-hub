
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, MessageSquare, Send } from 'lucide-react';

interface VotingFormProps {
  projectId: number;
  projectTitle: string;
  onClose?: () => void;
}

const VotingForm = ({ projectId, projectTitle, onClose }: VotingFormProps) => {
  const [voteType, setVoteType] = useState<'like' | 'dislike' | null>(null);
  const [comment, setComment] = useState('');

  const handleVote = (type: 'like' | 'dislike') => {
    setVoteType(type);
    console.log(`Voted ${type} for project ${projectId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Voting submission:', { projectId, voteType, comment });
    alert(`Your ${voteType} vote and comment have been submitted!`);
    if (onClose) onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-blue-800 mb-2">Vote for Project</CardTitle>
        <p className="text-sm text-gray-600">{projectTitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vote Buttons */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700 mb-3">Cast Your Vote:</h3>
            <div className="flex gap-4">
              <Button
                type="button"
                variant={voteType === 'like' ? 'default' : 'outline'}
                onClick={() => handleVote('like')}
                className={`flex-1 py-3 ${voteType === 'like' ? 'bg-green-600 hover:bg-green-700' : 'border-green-600 text-green-600 hover:bg-green-50'}`}
              >
                <ThumbsUp className="w-5 h-5 mr-2" />
                Support
              </Button>
              
              <Button
                type="button"
                variant={voteType === 'dislike' ? 'default' : 'outline'}
                onClick={() => handleVote('dislike')}
                className={`flex-1 py-3 ${voteType === 'dislike' ? 'bg-red-600 hover:bg-red-700' : 'border-red-600 text-red-600 hover:bg-red-50'}`}
              >
                <ThumbsDown className="w-5 h-5 mr-2" />
                Oppose
              </Button>
            </div>
          </div>
          
          {/* Comment Section */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-semibold text-gray-700">
              <MessageSquare className="w-4 h-4" />
              Your Comment (Optional):
            </label>
            <Textarea
              placeholder="Share your thoughts about this project..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full"
              rows={4}
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={!voteType}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 disabled:opacity-50"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Vote & Comment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VotingForm;
