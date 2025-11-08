const News = () => {
  const newsItems = [
    {
      date: '2024년 11월',
      title: 'Serendip Korea 전국 컨퍼런스 2024',
      description:
        '전국의 팀들이 모여 혁신적인 사회 영향 프로젝트를 선보였습니다. 모든 참가자들에게 축하를 드립니다!',
      category: '이벤트',
    },
    {
      date: '2024년 10월',
      title: '주요 기업들과의 새로운 파트너십',
      description:
        'Serendip Korea가 주요 기업들과 전략적 파트너십을 체결하여 학생 창업과 혁신을 지원합니다.',
      category: '파트너십',
    },
    {
      date: '2024년 9월',
      title: '글로벌 대회 국가 대표팀 발표',
      description:
        '글로벌 무대에서 우리나라를 대표할 Serendip Korea 팀을 만나보세요.',
      category: '성과',
    },
    {
      date: '2024년 8월',
      title: '여름 리더십 서밋 성공적 개최',
      description:
        '200명 이상의 학생들이 연례 리더십 개발 프로그램에 참여하여 사회적 기업가 정신을 위한 역량을 키웠습니다.',
      category: '이벤트',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case '이벤트':
        return 'bg-blue-100 text-blue-800';
      case '파트너십':
        return 'bg-green-100 text-green-800';
      case '성과':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            최신 <span className="text-primary">소식</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serendip Korea의 최신 활동 소식을 확인하세요
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-secondary to-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.date}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#read-more"
                  className="text-secondary hover:text-primary font-semibold inline-flex items-center transition duration-300"
                >
                  더 읽기
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-300">
            모든 소식 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
