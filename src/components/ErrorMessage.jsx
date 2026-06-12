const ErrorMessage = ({message, className =''}) => !message? null: (
    <div className={`max-w-2xl mx-auto mb-6 p-4 bg-red-900/50 border-red-700 rounded-lg text-red-200 ${className}`}>{message}</div> // This is just className= The mentioned {value} + {whatever the value that is passed to the component i.e className=''}
);

export default ErrorMessage;