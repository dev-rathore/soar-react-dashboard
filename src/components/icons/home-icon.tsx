import { SVGProps } from "react";

const HomeIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_14_1914)">
        <path d="M24.3254 10.8738C24.3249 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4984 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678134 10.8667C0.674701 10.8702 0.671267 10.8738 0.667834 10.8772C-0.224805 11.775 -0.223279 13.2317 0.672221 14.1272C1.08135 14.5365 1.6217 14.7736 2.19943 14.7984C2.2229 14.8006 2.24655 14.8018 2.27039 14.8018H2.67684V22.3066C2.67684 23.7917 3.88515 25 5.37059 25H9.36038C9.76474 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2207 13.2305 25.2211 11.7714 24.3254 10.8738Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_14_1914">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeIcon;