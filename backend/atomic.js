// atomic.js — 原子写工具，避免写一半崩溃导致数据损坏
const fs = require('fs');
const path = require('path');

/**
 * 原子写文件
 * 1. 写临时文件 filePath.tmp.XXXXX
 * 2. fsync 确保落盘
 * 3. rename 原子替换
 * @param {string} filePath - 目标文件路径
 * @param {string} content - 要写入的内容
 */
async function writeAtomic(filePath, content) {
  const tmpPath = filePath + '.tmp.' + Math.random().toString(36).slice(2, 8);
  const dir = path.dirname(filePath);

  // 确保目录存在
  await fs.promises.mkdir(dir, { recursive: true });

  // 写临时文件
  const fd = await fs.promises.open(tmpPath, 'w');
  try {
    await fd.write(content, 0, 'utf-8');
    await fd.datasync();
  } finally {
    await fd.close();
  }

  // 原子替换
  await fs.promises.rename(tmpPath, filePath);
}

/**
 * 原子读 JSON
 * @param {string} filePath
 * @returns {any}
 */
async function readJson(filePath) {
  const raw = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(raw);
}

/**
 * 原子写 JSON
 * @param {string} filePath
 * @param {any} data
 */
async function writeJsonAtomic(filePath, data) {
  const content = JSON.stringify(data, null, 2) + '\n';
  await writeAtomic(filePath, content);
}

/**
 * 安全删除文件（先重命名备份再删）
 * @param {string} filePath
 */
async function safeDelete(filePath) {
  try {
    await fs.promises.access(filePath);
  } catch {
    return; // 文件不存在，无需删除
  }
  const bakPath = filePath + '.bak.' + Date.now();
  await fs.promises.rename(filePath, bakPath);
  await fs.promises.unlink(bakPath);
}

module.exports = { writeAtomic, readJson, writeJsonAtomic, safeDelete };
