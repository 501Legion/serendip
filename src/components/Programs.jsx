

const Programs = () => {
  const programs = [
    {
      title: '전국 컨퍼런스',
      description:
        '전국의 팀들이 모여 혁신적인 프로젝트를 공유하고 네트워킹하는 기회를 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
    {
      title: '리더십 개발 프로그램',
      description:
        '워크샵, 세미나, 프로젝트 관리 경험을 통해 필수적인 리더십 역량을 개발합니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
    {
      title: '글로벌 네트워크',
      description:
        '다양한 대학 및 지역의 청년들과 연결되어 폭넓은 네트워킹 기회를 제공합니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: '프로젝트 기반 학습',
      description:
        '실제 프로젝트를 통해 실무 경험을 쌓고 문제 해결 능력을 키웁니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: '멘토링 프로그램',
      description:
        '업계 전문가 및 선배 멤버들과의 멘토링을 통해 실질적인 조언과 가이드를 받을 수 있습니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: '역량 강화 교육',
      description:
        '다양한 교육 프로그램을 통해 전문 지식과 실무 능력을 향상시킬 수 있습니다.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            우리의 <span className="text-primary">프로그램</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serendip Korea 멤버들에게 제공되는 다양한 기회를 만나보세요
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-primary mb-4">{program.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {program.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-lg p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              함께 성장할 준비가 되셨나요?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Serendip Korea에 가입하고 청년 리더로의 여정을 시작하세요
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary-dark transition duration-300 shadow-lg">
              Serendip Korea 가입하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
