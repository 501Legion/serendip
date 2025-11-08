const Teams = () => {
  const teams = [
    {
      university: '서울대학교',
      description:
        '지속가능한 농업과 농촌 지역 사회 개발 분야에서 혁신을 주도하고 있습니다.',
      projects: 3,
      members: 25,
    },
    {
      university: '고려대학교',
      description:
        '디지털 전환과 전자상거래 솔루션을 통해 지역 비즈니스를 지원하고 있습니다.',
      projects: 4,
      members: 30,
    },
    {
      university: '연세대학교',
      description:
        '교육 기술과 청년 역량 강화 프로그램을 통해 사회적 영향력을 창출합니다.',
      projects: 3,
      members: 28,
    },
    {
      university: '한양대학교',
      description:
        '지속가능한 환경 솔루션과 녹색 기술 이니셔티브를 개발하고 있습니다.',
      projects: 2,
      members: 22,
    },
    {
      university: '성균관대학교',
      description:
        '멘토링과 교육을 통해 소외 지역의 기업가 정신을 육성합니다.',
      projects: 3,
      members: 26,
    },
    {
      university: 'KAIST',
      description:
        '기술과 혁신을 활용하여 헬스케어와 교육 분야의 사회적 과제를 해결합니다.',
      projects: 4,
      members: 24,
    },
  ];

  return (
    <section id="teams" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            우리의 <span className="text-primary">팀</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전국에서 변화를 만들어가는 열정적인 학생 팀들을 만나보세요
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-6 rounded-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">프로젝트</div>
                  <div className="text-2xl font-bold text-secondary">
                    {team.projects}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {team.university}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {team.description}
              </p>
              <div className="flex items-center text-gray-600 text-sm">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>{team.members}명의 활동 멤버</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            당신의 대학에서 Serendip 팀을 시작하고 싶으신가요?
          </p>
          <button className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition duration-300 shadow-lg">
            팀 시작하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
