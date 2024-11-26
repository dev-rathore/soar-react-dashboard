import { Search } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  iconClassName?: string;
  containerClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className = "",
  iconClassName = "",
  containerClassName = "",
  ...props
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <Search
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-200 ${iconClassName}`}
      />
      <input
        type="search"
        className={`
          w-full
          bg-accent
          rounded-full
          py-3
          pl-12
          pr-4
          text-base
          placeholder:text-accent-100
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
          transition-shadow
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
