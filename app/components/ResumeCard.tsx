import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";
import { usePuterStore } from "~/lib/puter";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  const { fs } = usePuterStore();

  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(resume.imagePath);

      if (!blob) return;

      const url = URL.createObjectURL(blob);
      setResumeUrl(url);
    }

    loadResume();
  }, [resume.imagePath])

  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          {resume.companyName && <h2 className="!text-black font-bold break-words">
            {resume.companyName}
          </h2>}
          {resume.jobTitle && <h3 className="text-lg break-words text-gray-500">
            {resume.jobTitle}
          </h3>}
          {!resume.companyName && !resume.jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && <div className="gradient-border animate-in fade-in duration-1000">
        <div className="w-fit h-fit">
          <img
            src={resumeUrl}
            alt="resume"
            className="w-fit h-fit object-contain rounded-2xl"
          />
        </div>
      </div>}
    </Link>
  );
};

export default ResumeCard;
