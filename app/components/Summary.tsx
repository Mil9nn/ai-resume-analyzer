import React from 'react'
import ScoreGauge from './ScoreGauge'
import ScoreBadge from './ScoreBadge';

const Category = ({ title, score }: {title: string, score: number}) => {
    const textColor = score >= 80 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500';
    return (
        <div className="resume-summary">
            <div className="category">
                <div className='flex flex-row max-xs:flex-col gap-2 xs:items-center justify-center'>
                    <p className='text-xl max-sm:text-sm '>{title}</p>
                    <ScoreBadge score={score} />
                </div>
                <p className='text-xl max-sm:text-sm'>
                    <span className={textColor}>{score}</span>/100
                </p>
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
        <div className="flex flex-row max-xs:flex-col items-center p-4 gap-8">
            <ScoreGauge score={feedback.overallScore} />

            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold max-xs:text-center'>Your Resume Score</h2>
                <p className='text-sm text-gray-500 max-xs:text-center'>This score is calculated based on the variables listed below</p>
            </div>
        </div>
        <div>
                <Category title="Tone and style" score={feedback.toneAndStyle.score} />
                <Category title="Content" score={feedback.content.score} />
                <Category title="Structure" score={feedback.structure.score} />
                <Category title="Skills" score={feedback.skills.score} />
            </div>
    </div>
  )
}

export default Summary