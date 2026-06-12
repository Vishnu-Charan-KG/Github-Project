import {FaStar,FaClock, FaCodeBranch } from 'react-icons/fa'
import {formatDate, formatNumber} from '../utils/format';


const RepoCard = ({repo, showOwner=false , dateFormat ={year:'numeric', month: 'long', day:'numeric'}, variant='default'}) => {
    const isEnhanced = variant === 'enhanced';
    const baseClasses = isEnhanced? "bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-200 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-750 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20" : "bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-200 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gray-750 hover:shadow-xl";

    const descriptionClamp = isEnhanced? 'line-clamp-3' : 'line-clamp-2';
    const statsLayout = isEnhanced? 'flex flex-wrapped items-center gap-4 text-sm text-gray-500': 'flex items-center gap-4 text-sm text-gray-500';
    const linkClass= 'text-gray-200 hover:text-blue-400 transition-colors';
    return(
        <div className={baseClasses}>
            <div className='flex items-center justify-between mb-3'>
                {isEnhanced? (
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-lg font-semibold mb-1 truncate'><a href={repo.html_url} target='_blank' rel='noopener noreferrer' className={linkClass}>{repo.full_name || repo.name}</a></h3>    
                        {showOwner && repo.owner && <p className='text-sm text-gray-500'>by {repo.owner.login}</p>}
                    </div>
                ) : (
                    <h4 className='text-lg text-gray-200 font-semibold mb-1 truncate'><a href={repo.html_url} target='_blank' rel='noopener noreferrer' className={linkClass}>{repo.full_name || repo.name}</a></h4>
                )}
                {repo.private && <span className={`ml-2 px-2 py-1 text-xs bg-yellow-600 text-white rounded ${isEnhanced? 'shrink-0': ''}`}>Private</span>}
                
            </div>
        {repo.description && <p className={`text-gray-400 text-sm mb-4 ${descriptionClamp}`}>{repo.description}</p>}
        <div className='flex flex-col gap-2'>
            {repo.language && <div className='flex items-center text-sm text-gray-500'><span className='w-3 h-3 rounded-full bg-blue-500 mr-2'></span><span>{repo.language}</span></div>}
       
            <div className={statsLayout}>
                <span className='flex items-center'><FaStar className='w-4 h-4 mr-1' />{formatNumber(repo.stargazers_count)}</span>
                <span className='flex items-center'><FaClock className='w-4 h-4 mr-1' />{formatDate(repo.updated_at, dateFormat)}</span>
            </div>
        </div>
        {showOwner && repo.owner && !isEnhanced && <div className='flex items-center gap-2 mt-4'><img src={repo.owner.avatar_url} alt={repo.owner.login} className='w-6 h-6 rounded-full' /><span className='text-xs  text-gray-500'>{repo.owner.login}</span></div>}
    </div>    
    );
};

export default RepoCard;
