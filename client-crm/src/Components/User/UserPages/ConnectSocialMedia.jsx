
import React, { useState, lazy, Suspense, useEffect } from 'react';
import { UserHeader } from '../common/UserHeader';
import { UserSidebar,useSidebarUser } from '../common/UserSidebar';
import { useTheme } from '../../../hooks/use-theme';
import { UserFooter } from '../common/UserFooter';

const ConnectSocialMedia = ({ onLogout }) => {
const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarUser();


  return (
    <>
        <UserHeader onToggleSidebar={toggleSidebar} />
        <UserSidebar isOpen={isSidebarOpen} onClose={closeSidebar} >
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-0 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Dashboard */}
          <div className="w-full">
              <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6">
                <h2 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-gray-400 mb-6">Connect to Social Media</h2>

                <div className="space-y-8">

                  {/* Social Media Connections */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* WhatsApp */}
                      <div className="flex items-center p-3 border border-gray-200 dark:border dark:border-gray-700 rounded-lg  transition-colors">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <svg className="w-6 h-6 text-green-600 " fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-400">WhatsApp</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-200">Connect your WhatsApp account</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                          Connect
                        </button>
                      </div>

                      {/* LinkedIn */}
                      <div className="flex items-center p-3 border border-gray-200 rounded-lg  dark:border dark:border-gray-700 transition-colors">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-400">LinkedIn</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-200">Connect your LinkedIn account</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                          Connect
                        </button>
                      </div>

                      {/* Instagram */}
                      <div className="flex items-center p-3 border border-gray-200 dark:border dark:border-gray-700 rounded-lg  transition-colors">
                        <div className="bg-pink-100 p-2 rounded-full mr-3">
                          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-400">Instagram</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-200">Connect your Instagram account</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                          Connect
                        </button>
                      </div>

                      {/* Facebook */}
                      <div className="flex items-center p-3 border border-gray-200 dark:border dark:border-gray-700 rounded-lg  transition-colors">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-400">Facebook</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-200">Connect your Facebook account</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                          Connect
                        </button>
                      </div>

                      {/* GitHub */}
                      <div className="flex items-center p-3 border border-gray-200 dark:border dark:border-gray-700 rounded-lg  transition-colors">
                        <div className="bg-gray-100 p-2 rounded-full mr-3">
                          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-gray-400">GitHub</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-200">Connect your GitHub account</p>
                        </div>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       

          </div>
        </div>
      </div>
    </div>
    </UserSidebar>
    <UserFooter/>
    </>
  );
};

export default ConnectSocialMedia;
















