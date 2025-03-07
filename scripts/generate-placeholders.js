const fs = require('fs');
const { createCanvas } = require('canvas');

const images = [
  { name: 'profile-placeholder.jpg', width: 400, height: 400, text: '个人照片' },
  { name: 'project-placeholder-1.jpg', width: 800, height: 600, text: '项目 1' },
  { name: 'project-placeholder-2.jpg', width: 800, height: 600, text: '项目 2' },
  { name: 'project-placeholder-3.jpg', width: 800, height: 600, text: '项目 3' },
  { name: 'project-placeholder-4.jpg', width: 800, height: 600, text: '项目 4' },
  { name: 'project-placeholder-5.jpg', width: 800, height: 600, text: '项目 5' },
  { name: 'project-placeholder-6.jpg', width: 800, height: 600, text: '项目 6' },
  { name: 'github-avatar-placeholder.jpg', width: 400, height: 400, text: 'GitHub头像' },
  { name: 'github-contributions-placeholder.jpg', width: 1200, height: 600, text: 'GitHub贡献图表' },
];

function generatePlaceholder(width, height, text) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 绘制背景
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);

  // 绘制文字
  ctx.fillStyle = '#6b7280';
  ctx.font = `${Math.min(width, height) / 10}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  return canvas.toBuffer('image/jpeg');
}

// 确保public目录存在
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// 生成所有占位图片
images.forEach(({ name, width, height, text }) => {
  const buffer = generatePlaceholder(width, height, text);
  fs.writeFileSync(`public/${name}`, buffer);
  console.log(`Generated ${name}`);
}); 