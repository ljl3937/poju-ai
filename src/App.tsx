import React from 'react';
import { Code2, Target, Users, Brain, Trophy, Calendar, Clock, BookOpen, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">A 破局行动营</h1>
            <p className="text-2xl mb-8">打造你的编程能力，开启职业新篇章</p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                立即报名
              </button>
              <button className="border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition">
                了解详情
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: '目标明确',
                desc: '针对性培训，快速提升实战能力'
              },
              {
                icon: <Code2 className="w-8 h-8 text-blue-500" />,
                title: '实战驱动',
                desc: '真实项目演练，掌握核心技能'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: '社群互动',
                desc: '优秀学员交流，共同进步成长'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">课程大纲</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                week: '第一周',
                title: '编程基础与思维培养',
                content: '算法思维、数据结构基础、编程范式介绍'
              },
              {
                week: '第二周',
                title: '进阶技术栈学习',
                content: '主流框架应用、数据库设计、API开发'
              },
              {
                week: '第三周',
                title: '项目实战演练',
                content: '真实项目开发、团队协作、代码审查'
              },
              {
                week: '第四周',
                title: '性能优化与部署',
                content: '性能调优、自动化部署、监控维护'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">{item.week} - {item.title}</h3>
                </div>
                <p className="text-gray-600 ml-10">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">讲师团队</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "张教授",
                title: "首席讲师",
                desc: "前BAT技术专家，10年+研发经验"
              },
              {
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "李老师",
                title: "实战导师",
                desc: "全栈开发专家，技术社区活跃贡献者"
              },
              {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                name: "王老师",
                title: "项目教练",
                desc: "资深架构师，多个明星项目负责人"
              }
            ].map((teacher, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={teacher.image} alt={teacher.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                  <p className="text-blue-500 mb-2">{teacher.title}</p>
                  <p className="text-gray-600">{teacher.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">你将获得</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "系统化知识",
                desc: "完整的技术体系培养"
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "实战经验",
                desc: "真实项目开发经历"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "人脉资源",
                desc: "优秀同行交流机会"
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "职业提升",
                desc: "就业能力显著提高"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">立即加入 A 破局行动营</h2>
            <p className="text-xl text-gray-600 mb-8">
              限时优惠名额即将截止，把握机会，开启你的技术突破之旅
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>下一期开课时间：2024年4月15日</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>课程周期：4周</span>
              </div>
            </div>
            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              预约咨询
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 A 破局行动营. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;