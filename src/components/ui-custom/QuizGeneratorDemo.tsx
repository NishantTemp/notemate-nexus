
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Youtube, ChevronDown, Zap, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/hooks/use-toast";

type InputType = 'youtube' | 'pdf';

const QuizGeneratorDemo = () => {
  const [inputType, setInputType] = useState<InputType>('youtube');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [questionCount, setQuestionCount] = useState('10 Questions');
  const [quizType, setQuizType] = useState('Standard Quiz');
  const [isDropdownOpen, setIsDropdownOpen] = useState({ count: false, type: false });
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleTabClick = (type: InputType) => {
    setInputType(type);
    setFile(null);
    setYoutubeUrl('');
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 20 * 1024 * 1024) { // 20MB
        toast({
          title: "File too large",
          description: "Maximum file size is 20MB",
          variant: "destructive",
        });
        return;
      }
      
      const fileType = selectedFile.type;
      if (fileType === 'application/pdf' || fileType.includes('powerpoint')) {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, PPT, or PPTX file",
          variant: "destructive",
        });
      }
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.size > 20 * 1024 * 1024) { // 20MB
        toast({
          title: "File too large",
          description: "Maximum file size is 20MB",
          variant: "destructive",
        });
        return;
      }
      
      const fileType = droppedFile.type;
      if (fileType === 'application/pdf' || fileType.includes('powerpoint')) {
        setFile(droppedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, PPT, or PPTX file",
          variant: "destructive",
        });
      }
    }
  };
  
  const handleSubmit = () => {
    if (inputType === 'youtube' && !youtubeUrl) {
      toast({
        title: "Input required",
        description: "Please enter a YouTube URL",
        variant: "destructive",
      });
      return;
    }
    
    if (inputType === 'pdf' && !file) {
      toast({
        title: "File required",
        description: "Please upload a file",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would submit the form data to an API
    toast({
      title: "Quiz generation started",
      description: "Your quiz is being generated...",
    });
    
    // Simulate a success message after a delay
    setTimeout(() => {
      toast({
        title: "Quiz generated successfully!",
        description: "Your quiz is ready to use.",
      });
    }, 2000);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 sm:p-8">
      {/* Input Type Tabs */}
      <div className="flex mb-6 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => handleTabClick('youtube')}
          className={cn(
            "flex items-center justify-center py-2 px-4 rounded-md w-1/2 text-sm font-medium transition-all",
            inputType === 'youtube'
              ? "bg-primary text-white shadow-sm"
              : "text-slate-700 hover:bg-slate-200"
          )}
        >
          <Youtube size={18} className="mr-2" />
          YouTube
        </button>
        <button
          onClick={() => handleTabClick('pdf')}
          className={cn(
            "flex items-center justify-center py-2 px-4 rounded-md w-1/2 text-sm font-medium transition-all",
            inputType === 'pdf'
              ? "bg-primary text-white shadow-sm"
              : "text-slate-700 hover:bg-slate-200"
          )}
        >
          <FileText size={18} className="mr-2" />
          PDF/Slides
        </button>
      </div>

      {/* Input Area */}
      {inputType === 'youtube' ? (
        <div className="mb-6">
          <Input
            className="w-full p-3 text-sm border border-slate-200 rounded-lg"
            placeholder="Paste YouTube video URL here"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
        </div>
      ) : (
        <div 
          className={cn(
            "mb-6 border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all",
            isDragging ? "border-primary bg-primary/5" : "border-slate-200",
            file ? "bg-slate-50" : ""
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput')?.click()}
        >
          <input
            type="file"
            id="fileInput"
            className="hidden"
            accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
            onChange={handleFileChange}
          />
          
          {file ? (
            <div className="flex flex-col items-center">
              <FileText size={32} className="text-primary mb-2" />
              <p className="text-sm font-medium text-slate-800">{file.name}</p>
              <p className="text-xs text-slate-500">
                {(file.size / (1024 * 1024)).toFixed(2)}MB
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Upload size={32} className="text-slate-400 mb-2" />
              <p className="text-sm font-medium text-slate-800">Click to upload <span className="text-slate-500">or drag and drop</span></p>
              <p className="text-xs text-slate-500 mt-1">PDF, PPT, or PPTX (MAX. 20MB)</p>
            </div>
          )}
        </div>
      )}

      {/* Settings Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Question Count Dropdown */}
        <div className="relative">
          <p className="text-sm font-medium text-slate-700 mb-2">Number of Questions</p>
          <button 
            className="w-full flex items-center justify-between p-3 text-sm border border-slate-200 rounded-lg bg-white"
            onClick={() => setIsDropdownOpen(prev => ({ ...prev, count: !prev.count }))}
          >
            <span>{questionCount}</span>
            <ChevronDown size={16} />
          </button>
          
          {isDropdownOpen.count && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg">
              {["5 Questions", "10 Questions", "15 Questions", "20 Questions"].map((option) => (
                <div 
                  key={option}
                  className="p-3 text-sm hover:bg-slate-50 cursor-pointer"
                  onClick={() => {
                    setQuestionCount(option);
                    setIsDropdownOpen(prev => ({ ...prev, count: false }));
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Quiz Type Dropdown */}
        <div className="relative">
          <p className="text-sm font-medium text-slate-700 mb-2">Quiz Type</p>
          <button 
            className="w-full flex items-center justify-between p-3 text-sm border border-slate-200 rounded-lg bg-white"
            onClick={() => setIsDropdownOpen(prev => ({ ...prev, type: !prev.type }))}
          >
            <span>{quizType}</span>
            <ChevronDown size={16} />
          </button>
          
          {isDropdownOpen.type && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg">
              {["Standard Quiz", "Multiple Choice", "True/False", "Fill in the Blank"].map((option) => (
                <div 
                  key={option}
                  className="p-3 text-sm hover:bg-slate-50 cursor-pointer"
                  onClick={() => {
                    setQuizType(option);
                    setIsDropdownOpen(prev => ({ ...prev, type: false }));
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Generate Button */}
      <Button 
        className="w-full py-6 text-base font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 transition-all"
        onClick={handleSubmit}
      >
        <Zap className="mr-2" size={20} />
        Generate Quiz Now
      </Button>
    </div>
  );
};

export default QuizGeneratorDemo;
