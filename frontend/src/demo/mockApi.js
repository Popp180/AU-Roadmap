import {
  demoAlumni,
  demoCareers,
  demoCourses,
  demoIndustry,
  demoPrograms,
  demoReplies,
  demoResources,
  demoRoadmap,
  demoThreads,
  demoUser,
  demoUsers,
} from './mockData';

const clone = value => structuredClone(value);
const ok = (config, data, status = 200) => Promise.resolve({ data: { success: true, data: clone(data) }, status, statusText: 'OK', headers: {}, config });
const getId = url => Number(url.match(/\/(\d+)(?:\/|$)/)?.[1]);

function filterPrograms(params = {}) {
  return demoPrograms.filter(program => {
    const query = String(params.search || params.q || '').toLowerCase();
    return (!params.level || program.level === params.level)
      && (!query || `${program.name} ${program.code} ${program.description}`.toLowerCase().includes(query));
  });
}

export function demoApiAdapter(config) {
  const method = (config.method || 'get').toLowerCase();
  const url = String(config.url || '').replace(/^\/api/, '');
  const payload = typeof config.data === 'string' ? JSON.parse(config.data || '{}') : (config.data || {});

  if (url === '/auth/me') return ok(config, demoUser);
  if (url === '/auth/login' || url === '/auth/register') return ok(config, { token: 'portfolio-demo-session', user: demoUser });
  if (url === '/auth/profile') return ok(config, { ...demoUser, ...payload });
  if (url === '/auth/avatar') return ok(config, { avatar_url: demoUser.avatar_url });

  if (url === '/programs/featured-alumni') return ok(config, demoAlumni.slice(0, 4));
  if (url === '/programs/compare') return ok(config, demoPrograms.filter(program => String(config.params?.ids || '').split(',').includes(String(program.id))));
  if (url === '/programs') return ok(config, filterPrograms(config.params));

  const programMatch = url.match(/^\/programs\/(\d+)(?:\/(courses|roadmap|alumni|industry|careers|resources))?$/);
  if (programMatch) {
    const program = demoPrograms.find(item => item.id === Number(programMatch[1])) || demoPrograms[0];
    const section = programMatch[2];
    if (!section) return ok(config, program);
    if (section === 'courses') return ok(config, demoCourses);
    if (section === 'roadmap') return ok(config, { ...demoRoadmap, program });
    if (section === 'alumni') return ok(config, demoAlumni);
    if (section === 'industry') return ok(config, demoIndustry);
    if (section === 'careers') return ok(config, demoCareers);
    if (section === 'resources') return ok(config, demoResources);
  }

  if (url === '/search') {
    const q = String(config.params?.q || '').toLowerCase();
    const programs = filterPrograms({ q });
    const courses = demoCourses
      .filter(item => `${item.name} ${item.code}`.toLowerCase().includes(q))
      .map(item => ({ ...item, level: item.year_level, program_id: 1 }));
    const alumni = demoAlumni.filter(item => `${item.first_name} ${item.last_name} ${item.current_company}`.toLowerCase().includes(q));
    const industry = demoIndustry.filter(item => `${item.name} ${item.industry_sector}`.toLowerCase().includes(q));
    const careers = demoCareers.paths.filter(item => `${item.job_title} ${item.description}`.toLowerCase().includes(q)).map(item => ({ ...item, program_name: demoPrograms[0].name }));
    return ok(config, { programs, courses, alumni, industry, careers, total: programs.length + courses.length + alumni.length + industry.length + careers.length });
  }

  if (url === '/community/people') return ok(config, demoAlumni.filter(person => !config.params?.search || `${person.first_name} ${person.last_name} ${person.current_company}`.toLowerCase().includes(config.params.search.toLowerCase())));
  if (/^\/community\/people\/\d+$/.test(url)) return ok(config, demoAlumni.find(person => person.id === getId(url)) || demoAlumni[0]);
  if (url === '/community/connections') return ok(config, demoAlumni.slice(1, 3));
  if (url === '/community/requests') return ok(config, [{ id: 71, sender_id: 24, first_name: 'Walter', last_name: 'Marsh', current_position: 'Research Analyst', created_at: '2026-09-26T08:00:00Z' }]);
  if (url === '/community/conversations') return ok(config, [{ partner_id: 21, first_name: 'Rhaneela', last_name: 'Punitham', last_message: 'Happy to review your résumé before Thursday.', last_message_at: '2026-09-27T06:20:00Z', unread_count: 1 }]);
  if (/^\/community\/messages\/\d+$/.test(url)) return ok(config, [
    { id: 1, sender_id: 21, receiver_id: 1, content: 'Hi Maya, I saw your question about graduate roles.', created_at: '2026-09-27T06:10:00Z' },
    { id: 2, sender_id: 1, receiver_id: 21, content: 'Thanks! I am preparing applications now.', created_at: '2026-09-27T06:15:00Z' },
    { id: 3, sender_id: 21, receiver_id: 1, content: 'Happy to review your résumé before Thursday.', created_at: '2026-09-27T06:20:00Z' },
  ]);
  if (url === '/community/messages' && method === 'post') return ok(config, { id: Date.now(), sender_id: 1, receiver_id: payload.receiver_id, content: payload.content, created_at: new Date().toISOString() }, 201);
  if (url === '/community/connect' || url.includes('/community/connect/')) return ok(config, { status: 'pending' });

  if (url === '/discussions/all') return ok(config, demoThreads.filter(thread => !config.params?.category || thread.category === config.params.category));
  if (/^\/discussions\/thread\/\d+$/.test(url) && method === 'get') {
    const thread = demoThreads.find(item => item.id === getId(url)) || demoThreads[0];
    return ok(config, { ...thread, replies: demoReplies.filter(reply => reply.thread_id === thread.id) });
  }
  if (url === '/discussions/create') return ok(config, { id: Date.now(), ...payload, first_name: demoUser.first_name, last_name: demoUser.last_name, author_id: demoUser.id, role: 'student', created_at: new Date().toISOString(), reply_count: 0 }, 201);
  if (/^\/discussions\/thread\/\d+\/reply$/.test(url)) return ok(config, { id: Date.now(), ...payload }, 201);
  if (url === '/discussions/upload-image') return ok(config, { image_url: '/posts/post_1_1778149519818.jpg' }, 201);
  if (url.startsWith('/discussions/')) return ok(config, {});

  if (url === '/admin/stats') return ok(config, { programs: demoPrograms.length, courses: demoCourses.length, users: 286, alumni: demoAlumni.length, partners: demoIndustry.length, resources: demoResources.length });
  if (url === '/admin/courses' && method === 'get') return ok(config, demoCourses);
  if (url === '/admin/alumni' && method === 'get') return ok(config, demoAlumni.map(person => ({ ...person, program_name: demoPrograms[0].name, program_id: 1 })));
  if (url === '/admin/industry' && method === 'get') return ok(config, demoIndustry);
  if (url === '/admin/users' && method === 'get') return ok(config, demoUsers);
  if (url.startsWith('/admin/')) return ok(config, { id: getId(url) || Date.now(), ...payload }, method === 'post' ? 201 : 200);

  return ok(config, {});
}
