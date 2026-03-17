# LLM Tutorial — Content Guide

> How to continue adding content to this project session by session.

---

## Project Info

- **Location**: `E:\ClaudeProject\llm-tutorial`
- **Stack**: React 19 + TypeScript + Vite + TailwindCSS
- **Run**: `cd E:\ClaudeProject\llm-tutorial && npm run dev` → http://localhost:5173

---

## Current Progress

| Chapter | Topics | Done | Remaining |
|---------|--------|------|-----------|
| 🍇 大模型概述 | 3 | ✅ 3 | 0 |
| 🍋 大模型架构 | 7 | 7 | 0 |
| 🍒 大模型训练 | 11 | 0 | 11 |
| 🌶️ 大模型微调 | 11 | 0 | 11 |
| 🍔 大模型框架 | 11 | 0 | 11 |
| 🥘 大模型推理与部署 | 9 | 0 | 9 |
| 🎃 大模型评估 | 3 | 0 | 3 |
| 🎯 大模型应用 | 1 | 0 | 1 |
| 🪁 大模型安全与挑战 | 1 | 0 | 1 |
| 🏗️ AI Infra | 1 | 0 | 1 |
| **Total** | **58** | **10** | **48** |

### Completed Topics
- [x] 🍈 什么是大模型
- [x] 🍉 大模型的发展历程
- [x] 🍊 大模型的应用场景
- [x] 🍌 原始 Transformer 结构回顾

### Next Up
- [x] 🍍 MOE
- [x] 🥭 GPT系列
- [x] 🍎 LLAMA系列
- [x] 🍏 DeepSeek系列
- [x] 🍐 LongCat系列
- [x] 🍑 Kimi系列

---

## How to Add Content (Session Instructions for Claude)

### Step 1 — Context to give Claude at session start

> "I'm continuing the llm-tutorial project at `E:\ClaudeProject\llm-tutorial`.
> It's a React + TypeScript + Vite app for LLM learning content.
> Please read `CONTENT_GUIDE.md` for current progress and instructions."

### Step 2 — Paste format (plain text only, NO HTML)

```
TOPIC: <Chinese topic name>

<plain text content here>
```

Example:
```
TOPIC: 原始 Transformer 结构回顾

Transformer 是 2017 年 Google 在论文...
```

### Step 3 — What Claude will do

Claude will:
1. Find the matching topic file under `src/content/topics/`
2. Write Chinese markdown + translated English markdown
3. Set `contentType: 'article'`
4. Run `npx tsc --noEmit` to verify
5. Update this `CONTENT_GUIDE.md` progress table

---

## File Map — Where Each Topic Lives

| Topic | File |
|-------|------|
| 什么是大模型, 发展历程, 应用场景 | `src/content/topics/overview.ts` |
| Transformer, MOE, GPT, LLAMA, DeepSeek, LongCat, Kimi | `src/content/topics/architecture.ts` |
| 数据准备 → 大模型分布式训练框架 (11 topics) | `src/content/topics/training.ts` |
| 什么是微调 → GRPO (11 topics) | `src/content/topics/finetuning.ts` |
| 框架生态 → 性能优化 (11 topics) | `src/content/topics/frameworks.ts` |
| COT → AI模型部署 (9 topics) | `src/content/topics/inference.ts` |
| 评估方法论 (3 topics) | `src/content/topics/evaluation.ts` |
| 大模型应用 | `src/content/topics/applications.ts` |
| 安全与挑战 | `src/content/topics/safety.ts` |
| AI Infra | `src/content/topics/infra.ts` |

---

## Token-Saving Tips

- **Best**: Copy plain text from browser (Ctrl+A in article body → paste to Notepad → copy from Notepad)
- **OK**: Reader mode copy (~3-5K tokens per article)
- **Avoid**: Raw HTML source (~15-18K tokens — 30-50x waste)

---

## Git Workflow

```bash
# After each session
cd E:\ClaudeProject\llm-tutorial
git add .
git commit -m "content: add <topic names>"
```
