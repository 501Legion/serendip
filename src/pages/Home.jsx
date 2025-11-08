import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  const features = [
    {
      title: '소개',
      description: '우리의 비전과 가치를 알아보세요',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
        </svg>
      ),
      link: '/about',
      color: 'from-primary to-primary-dark'
    },
    {
      title: '프로그램',
      description: '다양한 활동과 기회를 탐색해보세요',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
      link: '/programs',
      color: 'from-green-500 to-green-600'
    },
    {
      title: '팀',
      description: '전국의 멋진 팀원들을 만나보세요',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      link: '/teams',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: '소식',
      description: '최신 활동 소식을 확인하세요',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      ),
      link: '/news',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Hero />

      {/* Quick Access Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              <span className="text-primary">Serendip</span> 둘러보기
            </h2>
            <p className="text-xl text-gray-600">
              우리가 제공하는 다양한 활동을 만나보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-8 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    자세히 보기
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            새로운 도전을 시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Serendip Korea에 함께하여 청년들의 성장과 도전을 함께하는 커뮤니티의 일원이 되어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 shadow-lg"
            >
              문의하기
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition duration-300"
            >
              더 알아보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
