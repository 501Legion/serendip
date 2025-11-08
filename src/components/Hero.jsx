const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              청년들의 새로운 도전을
              <span className="text-accent block mt-2">
                함께 응원합니다
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Serendip Korea는 대한민국 청년들의 도전과 성장을 지원하는 연합동아리입니다.
              함께 배우고, 성장하며, 더 나은 미래를 만들어갑니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 shadow-lg">
                함께하기
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition duration-300">
                더 알아보기
              </button>
            </div>
          </div>

          {/* Right Content - Illustration/Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-accent rounded-full opacity-20 absolute top-10 left-10"></div>
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-accent to-primary-light rounded-lg transform rotate-6 flex items-center justify-center shadow-2xl">
                <div className="bg-white w-full h-full rounded-lg transform -rotate-6 flex items-center justify-center p-8">
                  <div className="text-center">
                    <svg
                      className="w-32 h-32 mx-auto text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <p className="text-primary font-bold text-xl mt-4">
                      청년 리더
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
