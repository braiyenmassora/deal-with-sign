import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white body-font" style={{ marginLeft: '170px' }}>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
                    <span className="ml-3 text-base font-normal text-white">© 2023 Braiyen Massora</span>
                </a>
                <p className="text-sm text-white-500 sm:ml-4 sm:pl-4">
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://github.com/your-username" className="ml-3 text-white-500 hover:text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.492.5.093.682-.218.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.365-1.337-3.365-1.337-.455-1.167-1.11-1.48-1.11-1.48-.91-.623.068-.611.068-.611 1.004.07 1.532 1.03 1.532 1.03.893 1.526 2.345 1.085 2.916.829.09-.648.35-1.085.636-1.335-2.223-.252-4.555-1.11-4.555-4.937 0-1.09.39-1.986 1.03-2.684-.104-.252-.448-1.274.098-2.655 0 0 .845-.271 2.76 1.03A9.468 9.468 0 0112 5.847a9.468 9.468 0 012.565.346c1.914-1.301 2.758-1.03 2.758-1.03.548 1.381.205 2.403.1 2.655.64.698 1.028 1.594 1.028 2.684 0 3.835-2.335 4.682-4.566 4.928.36.308.678.917.678 1.847 0 1.333-.012 2.409-.012 2.734 0 .267.18.578.688.481A9.974 9.974 0 0022 12c0-5.523-4.477-10-10-10z"
                                ></path>
                            </svg>
                        </a>
                        <a href="#" className="ml-3 text-white-500 hover:text-white">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
