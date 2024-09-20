"use client"
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import remarkGfm from 'remark-gfm';
import Keywords from '../keywords/page';
const Readme = () => {
  const readme = useSelector((state) => state.search.singleSearch?.readme);

  if (!readme) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8">
        <div className="p-6 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mt-8 ">
      <div className="p-6">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // img: ({node, ...props}) => <img className="w-full h-auto" {...props} />,
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="mb-4" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4" {...props} />,
              li: ({node, ...props}) => <li className="mb-1" {...props} />,
              code: ({node, inline, ...props}) => 
                inline 
                  ? <code className="bg-gray-100  px-1 py-0.5" {...props} />
                  : <pre className="bg-gray-100 p-3 overflow-x-auto"><code {...props} /></pre>,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />,
              a: ({node, ...props}) => <a className="text-red-600 hover:underline" {...props} />,
            }}
          >
            {readme}
          </ReactMarkdown>
          <p className="text-lg font-semibold ">Keywords</p>
          <hr className='mt-3'/>
            <Keywords/>
          
        </div>
      </div>
    </div>
  );
};

export default Readme;