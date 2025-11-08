const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            <span className="text-primary">Serendip Korea</span> 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            청년들의 꿈과 도전을 응원하는 연합동아리
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Serendip이란?
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Serendip Korea는 대한민국 청년들의 새로운 도전과 성장을 지원하는
              연합동아리입니다. 우리는 청년들이 자신의 꿈을 실현하고 더 나은
              미래를 만들어갈 수 있도록 다양한 기회와 지원을 제공합니다.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              전국의 대학생들과 함께 배우고 성장하며, 실질적인 프로젝트 경험을
              통해 리더십과 전문성을 키워나갑니다. 멘토링, 교육 프로그램,
              네트워킹 기회를 통해 청년들의 역량 강화를 도모합니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Serendip Korea는 단순한 동아리를 넘어, 청년들이 서로의 꿈을
              응원하고 함께 성장하는 커뮤니티입니다.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-8 text-white shadow-xl">
            <h4 className="text-2xl font-bold mb-6">우리의 영향력</h4>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">
                  500+
                </div>
                <p className="text-gray-100">활동 멤버</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">
                  20+
                </div>
                <p className="text-gray-100">파트너 대학</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">
                  100+
                </div>
                <p className="text-gray-100">진행 프로젝트</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-8 rounded-lg hover:shadow-xl transition duration-300 border-2 border-primary">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              기회 발견
            </h3>
            <p className="text-gray-700">
              청년들의 잠재력과 가능성을 발견하고, 도전할 수 있는 다양한
              기회를 제공합니다.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg hover:shadow-xl transition duration-300 border-2 border-primary">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              실천과 도전
            </h3>
            <p className="text-gray-700">
              배운 것을 실천하고 새로운 것에 도전하며, 실질적인 경험을 통해
              성장할 수 있도록 지원합니다.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg hover:shadow-xl transition duration-300 border-2 border-primary">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              함께 성장
            </h3>
            <p className="text-gray-700">
              서로의 꿈을 응원하고 함께 성장하는 문화를 만들어, 모두가
              더 나은 미래를 만들어갈 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
