import type { TopicContent } from '../types'

export const whatIsFineTuning: TopicContent = {
  id: 'what-is-finetuning',
  title: { en: 'What is Fine-Tuning?', zh: '什么是微调' },
  contentType: 'article',
  content: {
    zh: `微调（Fine-tuning）是指在已经预训练好的模型基础上，使用特定任务的数据进行进一步训练，使模型更好地适应特定场景或任务。就像调整一辆万能汽车的发动机，以适应你具体的驾驶需求，而不是从零开始制造一辆新车。

## 微调的重要性

预训练模型（如 BERT、GPT）已经从海量数据中学习了丰富的语言知识。微调的价值在于：

- **节省时间和计算资源**：不需要从零训练，大幅降低成本
- **提升模型性能**：在特定任务上显著优于通用模型
- **适应多样化任务**：文本分类、问答、命名实体识别等各类下游任务

## 微调的基本流程

![微调基本流程图](/images/finetuning-workflow-zh.svg)

1. 选取预训练模型作为**源模型（Source Model）**
2. 复制模型层，构建**目标模型（Target Model）**
3. 随机初始化输出层（适配新任务的输出形式）
4. 在源数据集上预训练，在目标数据集上微调

## 微调的主要方式

### 全量微调（Full Fine-Tuning）

更新模型的全部参数。优点是效果好，缺点是计算成本高，需要大量 GPU 资源。

### 参数高效微调（PEFT）

只更新少量参数，大幅降低计算成本，常见方法包括：

- **Adapter**：在 Transformer 层中插入小型适配器模块
- **LoRA（低秩适配）**：通过低秩矩阵分解来近似参数更新
- **Prefix Tuning**：在输入前添加可学习的前缀向量

## 总结

微调是连接通用预训练模型和具体应用场景的桥梁。它让我们能够用较低成本，在特定任务上获得优秀的模型表现。理解微调的基本概念，是深入学习大模型应用的重要一步。`,

    en: `Fine-tuning refers to taking a pre-trained model and further training it on task-specific data, adapting it to a specific use case. Think of it like tuning a versatile car engine for your specific driving needs — rather than building a new car from scratch.

## Why Fine-Tuning Matters

Pre-trained models (like BERT and GPT) have already learned rich linguistic knowledge from massive datasets. Fine-tuning adds value because it:

- **Saves time and compute**: No need to train from scratch — dramatically lower cost
- **Improves task performance**: Significantly outperforms general models on specific tasks
- **Adapts to diverse tasks**: Text classification, QA, named entity recognition, and more

## Basic Fine-Tuning Workflow

![Fine-tuning workflow diagram](/images/finetuning-workflow-en.svg)

1. Select a pre-trained model as the **Source Model**
2. Copy model layers to build the **Target Model**
3. Randomly initialize the output layer (to match the new task's output format)
4. Pre-train on the source dataset, then fine-tune on the target dataset

## Main Fine-Tuning Approaches

### Full Fine-Tuning

Updates all model parameters. Produces great results but requires heavy compute and significant GPU resources.

### Parameter-Efficient Fine-Tuning (PEFT)

Updates only a small subset of parameters, drastically reducing cost. Common methods include:

- **Adapter**: Inserts small adapter modules within Transformer layers
- **LoRA (Low-Rank Adaptation)**: Approximates parameter updates via low-rank matrix decomposition
- **Prefix Tuning**: Prepends learnable prefix vectors to the input

## Summary

Fine-tuning bridges general pre-trained models and specific applications efficiently. It lets you achieve strong task-specific performance at a fraction of the training cost. Understanding fine-tuning is a foundational step in learning how large language models are applied in practice.`,
  },
}

export const fineTuningEvolution: TopicContent = {
  id: 'finetuning-evolution',
  title: { en: 'Evolution of Fine-Tuning Techniques', zh: '微调技术的发展与演进' },
  contentType: 'article',
  content: {
    zh: `微调技术从最初的全参数更新，逐步演进为更高效、更灵活的参数高效微调（PEFT）方法体系。了解这一发展脉络，有助于理解各种技术的设计动机与适用场景。

## 微调背景与动机

在大模型时代，全量微调面临三大核心挑战：

**计算成本高**：对于拥有数十亿参数的大模型，更新全部参数需要巨大的算力与显存资源，普通研究者和中小企业难以承受。

**灾难性遗忘**：在特定任务数据上全量微调后，模型可能"忘记"预训练阶段学到的通用知识，导致泛化能力下降。

**数据效率低**：许多下游任务的标注数据十分有限，全量微调容易在小数据集上过拟合，泛化能力差。

这三个动机共同推动了参数高效微调（PEFT）技术的快速发展。

## 技术发展时间线与主要方法

### 2018年与之前：全参数微调

全参数微调（Full Fine-Tuning）是最早期的迁移学习方式，对预训练模型的所有参数都在下游任务数据上进行更新。

- 效果最佳，所有参数参与更新，是其他方法的性能上界
- 训练慢，显存和算力要求高
- 每个下游任务需要独立保存一份完整的模型副本

### 2019年：特征提取

特征提取冻结预训练模型的大部分参数，只训练顶层的分类头（输出层），将预训练模型作为固定的特征提取器使用。

![特征提取 vs 微调对比](/images/finetuning-feature-extraction-zh.svg)

- 相当于只训练分类器，速度极快
- 资源消耗极小，适合数据量少的场景
- 效果有限，无法充分利用预训练模型的表达能力

### 2019年：Adapter 方法

Adapter 方法由 Houlsby 等人提出，在 Transformer 的每个子层（Self-Attention 和 FFN）后插入轻量级的 Adapter 模块，只训练这些新增模块的参数。

![Adapter 架构示意图](/images/finetuning-adapter-architecture.svg)

- 只需训练少量新增的 Adapter 参数（约为原模型的 1%–5%）
- 参数效率高，冻结原始参数，不影响基础模型能力
- 推理时有轻微额外延迟（需经过 Adapter 前向计算）

### 2021年：LoRA

LoRA（Low-Rank Adaptation）是目前最流行的参数高效微调方法。其核心思想是：预训练模型在微调过程中的参数变化量 ΔW 是低秩的，因此可以用两个小矩阵 A、B 的乘积来近似：

**ΔW = BA**，其中 B ∈ ℝ^(d×r)，A ∈ ℝ^(r×k)，秩 r ≪ min(d, k)

![LoRA 低秩适配示意图](/images/finetuning-lora-zh.svg)

- 训练参数极少（通常只有原模型的 0.1%–1%）
- 推理时可将 BA 合并回 W₀，**零额外延迟**
- 效果接近甚至媲美全量微调

### 2021年：提示微调（Prefix Tuning / Prompt Tuning）

提示微调方法在模型的输入前插入一组可训练的连续向量（Prefix / Soft Prompt），通过只训练这些向量来引导模型完成特定任务，模型本身的参数完全冻结。

![Prompt Tuning vs P-tuning v2 对比](/images/finetuning-prompt-tuning-comparison.svg)

- 冻结模型参数，只训练提示向量，参数量极小
- 训练成本极低
- 在模型规模较小时效果一般，规模越大效果越好

### 2022年：指令微调（Instruction Fine-Tuning）

指令微调将不同任务统一格式化为（指令 + 输入 → 输出）的形式进行训练，使模型能够理解自然语言指令并完成多种任务。代表工作包括 FLAN、InstructGPT 等。

![三种范式对比：Pretrain-Finetune / Prompting / Instruction Tuning](/images/finetuning-instruction-abc.svg)

指令微调的优势：
- 统一任务格式，显著提升模型的指令跟随能力
- 大幅提升零样本（Zero-shot）和少样本（Few-shot）泛化能力
- 让模型真正"听懂"人类意图

### 2022年末至2023年：强化对齐（RLHF）

随着 ChatGPT 的出现，基于人类反馈的强化学习（RLHF）成为主流对齐方法，使模型输出更加符合人类偏好。

![RLHF 三步流程](/images/finetuning-rlhf-steps.svg)

主要流派包括：

- **SFT（监督微调）**：先用高质量指令数据做基础监督微调
- **RLHF**：训练奖励模型，再用 PPO 算法优化策略模型，对齐人类偏好
- **DPO（直接偏好优化）**：无需奖励模型，直接从偏好数据优化，更简洁稳定
- **GRPO**：DeepSeek 提出的改进版强化学习算法，进一步提升训练效率

## 方法对比

| 方法 | 更新参数量 | 训练效率 | 任务效果 | 资源需求 | 典型代表 |
|------|-----------|---------|---------|---------|---------|
| 全参数微调 | 100% | 慢 | 最佳 | 高 | GPT/BERT 直接微调 |
| LoRA | 0.1%–1% | 快 | 接近全量 | 低 | LoRA、QLoRA |
| Adapter | ~3%–5% | 较快 | 较好 | 低 | Adapter Tuning |
| Prompt Tuning | <0.1% | 较快 | 一般 | 极低 | Prompt Tuning |
| Prefix Tuning | <1% | 较快 | 一般 | 低 | Prefix Tuning |
| 指令微调 | 可变 | 中 | 好 | 中 | FLAN、InstructGPT |
| RLHF / DPO | 可变 | 慢 | 优（对齐） | 高 | InstructGPT、ChatGPT |`,

    en: `Fine-tuning techniques have evolved from simple full-parameter updates to a rich ecosystem of Parameter-Efficient Fine-Tuning (PEFT) methods. Understanding this progression helps explain the design motivation and appropriate use cases for each approach.

## Background & Motivation

In the era of large models, full fine-tuning faces three core challenges:

**High compute cost**: Updating all parameters of a multi-billion parameter model demands enormous GPU memory and compute — out of reach for most researchers and small teams.

**Catastrophic forgetting**: After full fine-tuning on task-specific data, models can "forget" general knowledge learned during pre-training, reducing generalization ability.

**Data inefficiency**: Many downstream tasks have limited labeled data. Full fine-tuning easily overfits on small datasets.

These three motivations together drove the rapid development of PEFT techniques.

## Timeline & Key Methods

### 2018 and Earlier: Full Fine-Tuning

Full Fine-Tuning updates all parameters of the pre-trained model on downstream task data. It is the original transfer learning approach.

- Best possible performance — the upper bound for other methods
- Slow training with high GPU memory requirements
- Each downstream task requires storing a complete separate model copy

### 2019: Feature Extraction

Feature extraction freezes most of the pre-trained model's parameters and only trains the top classification head, treating the model as a fixed feature extractor.

![Feature extraction vs fine-tuning comparison](/images/finetuning-feature-extraction-zh.svg)

- Equivalent to only training a linear classifier — extremely fast
- Minimal resource requirements; suitable for small datasets
- Limited performance — cannot fully leverage the pre-trained model's representations

### 2019: Adapter Method

Introduced by Houlsby et al., the Adapter method inserts lightweight Adapter modules after each Transformer sub-layer (Self-Attention and FFN). Only these new modules are trained.

![Adapter architecture diagram](/images/finetuning-adapter-architecture.svg)

- Only ~1%–5% of additional parameters need to be trained
- High parameter efficiency; the original weights remain frozen
- Minor inference overhead (forward pass through Adapter layers)

### 2021: LoRA

LoRA (Low-Rank Adaptation) is currently the most popular PEFT method. The core idea: weight changes ΔW during fine-tuning are intrinsically low-rank, so they can be approximated by the product of two small matrices A and B:

**ΔW = BA**, where B ∈ ℝ^(d×r), A ∈ ℝ^(r×k), rank r ≪ min(d, k)

![LoRA low-rank adaptation diagram](/images/finetuning-lora-en.svg)

- Very few trainable parameters (typically 0.1%–1% of the original model)
- BA can be merged back into W₀ at inference — **zero extra latency**
- Performance approaches or matches full fine-tuning

### 2021: Prompt Tuning / Prefix Tuning

Prompt tuning methods prepend a set of trainable continuous vectors (soft prompts or prefixes) to the model input. Only these vectors are trained; all model weights remain frozen.

![Prompt Tuning vs P-tuning v2 comparison](/images/finetuning-prompt-tuning-comparison.svg)

- Only the prompt vectors are trainable — minimal parameter count
- Very low training cost
- Performance is weaker at smaller model scales; improves as model size grows

### 2022: Instruction Fine-Tuning

Instruction fine-tuning reformats diverse tasks into a unified (instruction + input → output) format, training models to follow natural language instructions across many tasks. Key works include FLAN and InstructGPT.

![Three paradigms: Pretrain-Finetune / Prompting / Instruction Tuning](/images/finetuning-instruction-abc.svg)

Advantages:
- Unified task format significantly improves instruction-following ability
- Greatly improves zero-shot and few-shot generalization
- Models learn to truly understand human intent

### Late 2022–2023: Reinforcement Alignment (RLHF)

With the emergence of ChatGPT, Reinforcement Learning from Human Feedback (RLHF) became the dominant alignment approach, making model outputs better aligned with human preferences.

![RLHF 3-step process](/images/finetuning-rlhf-steps.svg)

Key variants:

- **SFT (Supervised Fine-Tuning)**: Foundation step using high-quality instruction data
- **RLHF**: Train a reward model, then optimize the policy with PPO to align with human preferences
- **DPO (Direct Preference Optimization)**: Directly optimizes from preference pairs without a reward model — simpler and more stable
- **GRPO**: DeepSeek's improved RL algorithm with further efficiency gains

## Method Comparison

| Method | Params Updated | Training Speed | Task Performance | Resource Cost | Examples |
|--------|---------------|---------------|-----------------|--------------|---------|
| Full Fine-Tuning | 100% | Slow | Best | High | GPT/BERT direct |
| LoRA | 0.1%–1% | Fast | Near full | Low | LoRA, QLoRA |
| Adapter | ~3%–5% | Moderate | Good | Low | Adapter Tuning |
| Prompt Tuning | <0.1% | Fast | Moderate | Very low | Prompt Tuning |
| Prefix Tuning | <1% | Fast | Moderate | Low | Prefix Tuning |
| Instruction FT | Variable | Medium | Good | Medium | FLAN, InstructGPT |
| RLHF / DPO | Variable | Slow | Best (aligned) | High | ChatGPT, InstructGPT |`,
  },
}

export const lora: TopicContent = {
  id: 'lora',
  title: { en: 'LoRA Fine-Tuning', zh: 'LORA微调' },
  contentType: 'article',
  content: {
    zh: `## LoRA微调

随着大模型参数量不断增大，微调整个模型变得越来越昂贵。LoRA（Low-Rank Adaptation，低秩适应）提供了一种高效替代方案，让我们用极少的参数就能达到媲美全量微调的效果。

## 背景与挑战

在 LoRA 出现之前，微调大模型面临以下困难：

- **全量微调成本极高**：微调拥有数十亿参数的 Adapter 层需要大量算力
- **每个任务都要存储完整的模型副本**，存储成本巨大
- **训练一个大模型**需要多张高端 GPU，普通用户无法承担

LoRA 在这三个方面都做出了显著改进，成为当前最主流的参数高效微调方法。

## LoRA 的核心思想

Transformer 模型中，权重矩阵 W 的维度通常为 d×d（如 4096×4096）。

LoRA 过渡参数更新的思路：**不直接修改 W，而是用两个低秩小矩阵的乘积来近似参数变化**：

\`\`\`
h = Wx + BAx = (W + BA)x

其中：
  W ∈ ℝ^{d×d}  — 预训练权重（冻结，不更新）
  A ∈ ℝ^{d×r}  — 低秩矩阵 A，初始化为 N(0, σ²)
  B ∈ ℝ^{r×d}  — 低秩矩阵 B，初始化为 0
  r ≪ d          — 秩（rank），远小于 d
\`\`\`

![LoRA 低秩适配示意图](/images/lora-architecture.png)

**为什么这样初始化？**
- B 初始化为 0，使得训练开始时 ΔW = BA = 0，不破坏预训练权重
- A 随机初始化，确保从一开始就有非零梯度，训练可以正常启动

**参数量对比：**
\`\`\`
原始矩阵 W：d × d = 4096 × 4096 = 16,777,216 个参数
LoRA（r=16）：d×r + r×d = 4096×16 + 16×4096 = 131,072 个参数
参数减少：99.2%
\`\`\`

## LoRA 训练详细步骤

### 第1步：冻结原始 Transformer 权重

\`\`\`python
for param in model.parameters():
    param.requires_grad = False  # 冻结所有参数，不计算梯度
\`\`\`

冻结后，原始权重不参与反向传播，显存和计算量大幅减少。

### 第2步：选择 Transformer 注意力矩阵进行低秩分解

Transformer 注意力机制包含三个核心投影矩阵：

\`\`\`
Q = W_Q · x    （Query）
K = W_K · x    （Key）
V = W_V · x    （Value）
\`\`\`

LoRA 对选定的投影矩阵（通常是 Q 和 V）应用低秩分解：

\`\`\`
ΔW_Q = B_Q · A_Q
ΔW_V = B_V · A_V
\`\`\`

### 第3步：训练低秩适配器参数

\`\`\`python
import torch.nn as nn
import math

class LoRALinear(nn.Module):
    def __init__(self, in_features, out_features, rank=16, alpha=32):
        super().__init__()
        self.rank = rank
        self.alpha = alpha
        self.scaling = alpha / rank  # 缩放系数

        # 冻结的原始权重
        self.weight = nn.Parameter(
            torch.randn(out_features, in_features), requires_grad=False
        )
        # 可训练的低秩矩阵
        self.lora_A = nn.Parameter(torch.randn(rank, in_features))
        self.lora_B = nn.Parameter(torch.zeros(out_features, rank))  # B 初始化为 0

        nn.init.kaiming_uniform_(self.lora_A, a=math.sqrt(5))

    def forward(self, x):
        # 原始路径（冻结）+ LoRA 路径（可训练）
        base = x @ self.weight.T
        lora = x @ self.lora_A.T @ self.lora_B.T * self.scaling
        return base + lora
\`\`\`

只需对 A 和 B 做优化：

\`\`\`python
optimizer = torch.optim.AdamW([
    {'params': model.lora_A.parameters()},
    {'params': model.lora_B.parameters()},
])

# 训练循环
for batch in dataloader:
    y = model(batch['x'])
    loss = criterion(y, batch['label'])
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()
\`\`\`

### 第4步：训练后的权重合并（推理零开销）

训练结束后，可以将 ΔW = BA 合并回原始权重，推理时无任何额外开销：

\`\`\`
W_merged = W_0 + ΔW = W_0 + B · A
\`\`\`

\`\`\`python
# 合并权重到基础模型
model.q_proj.weight.data += model.lora_B.data @ model.lora_A.data
\`\`\`

### 第5步：差量矩阵应用选择

根据使用场景选择合并或保持独立：

\`\`\`python
# 方式1：合并（推理更快，单任务部署）
model_merged.q_proj.weight.data += model.lora_B.data @ model.lora_A.data

# 方式2：保持独立（多任务服务，运行时切换适配器）
output = base_output + (x @ lora_A.T @ lora_B.T) * scaling
\`\`\`

## LoRA 在 Transformer 中的应用位置

LoRA 主要作用于多头注意力（Multi-Head Attention）的投影层：

| 目标模块 | 适用场景 |
|---------|---------|
| 仅 q_proj, v_proj | 参数最少，适合默认选择（原始论文推荐） |
| q_proj, k_proj, v_proj, o_proj | 更好的注意力适配 |
| + gate_proj, up_proj, down_proj | 完整 FFN 覆盖，适合特定任务精调 |

**关键洞察：** 仅 Q 和 V 通常能用一半参数达到全适配器 90% 的效果。

## LoRA 完整训练示例代码

\`\`\`python
import torch
import torch.nn as nn
import math

class LoRALinear(nn.Module):
    def __init__(self, d, r, alpha=1):
        super().__init__()
        self.r = r
        self.alpha = alpha
        self.lora_A = nn.Linear(d, r, bias=False)
        self.lora_B = nn.Linear(r, d, bias=False)
        nn.init.normal_(self.lora_A.weight)
        nn.init.zeros_(self.lora_B.weight)

    def forward(self, x):
        return self.alpha * self.lora_B(self.lora_A(x))

class LoRAModel(nn.Module):
    def __init__(self, base_model, rank=4):
        super().__init__()
        self.base_model = base_model
        self.lora = nn.ModuleDict({
            name: LoRALinear(module.in_features, rank)
            for name, module in base_model.named_modules()
            if isinstance(module, nn.Linear)
        })

    def forward(self, x):
        return self.base_model(x) + sum(lora(x) for lora in self.lora.values())

# 使用示例
base_model = nn.Sequential(nn.Linear(512, 512))
lora_model = LoRAModel(base_model, rank=4)

optimizer = torch.optim.Adam(lora_model.lora.parameters(), lr=1e-3)
for epoch in range(100):
    x = torch.randn(32, 512)
    y = torch.randn(32, 512)
    loss = nn.MSELoss()(lora_model(x), y)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

print(f"最终 loss: {loss.item():.4f}")
\`\`\`

## 发展与变体

2023 年 LoRA 被大量研究拓展：

- **QLoRA**：4 位量化 + LoRA，在消费级 GPU 上微调 65B 模型成为可能
- **AdaLoRA**：自适应秩分配，根据重要性动态调整每层的秩 r
- **PEFT**：Hugging Face 推出的统一参数高效微调库，封装 LoRA、Adapter、Prefix Tuning 等
- **Hugging Face PEFT**：将 LoRA 融入主流工具链，几行代码即可使用

## LoRA 与传统微调对比

| 对比项 | 全参数微调（Full Fine-Tune） | LoRA |
|--------|----------------------------|------|
| 更新参数量 | 全部参数 | 仅 0.1–1%（矩阵 A 和 B） |
| 内存消耗 | 极大（需完整梯度和优化器状态） | 减少 60–80%，无需对冻结参数存梯度 |
| 训练速度 | 慢 | 约快 3× |
| 推理开销 | 无 | 无（合并后与原模型完全相同） |
| 灵活性 | 低（每任务一个完整模型） | 高（即插即用，运行时切换适配器） |
| 任务效果 | 最佳 | 大多数任务接近全量效果 |

**LoRA 核心优势总结：**
- 同一基础模型，挂载多个轻量适配器 → 多任务多租户服务
- 适配器文件极小（几十 MB）→ 易于分享、版本管理
- 数学可合并性 → 可将多个领域适配器线性叠加`,

    en: `## LoRA Fine-Tuning

As large model parameter counts keep growing, fine-tuning the entire model becomes increasingly expensive. LoRA (Low-Rank Adaptation) provides an efficient alternative — achieving results comparable to full fine-tuning while updating only a tiny fraction of parameters.

## Background & Challenges

Before LoRA, fine-tuning large models faced these core difficulties:

- **Full fine-tuning is extremely expensive**: Updating billions of parameters requires enormous compute and VRAM
- **Every task requires storing a full model copy**: Storage costs scale linearly with task count
- **Training large models requires multiple high-end GPUs**: Out of reach for most users

LoRA significantly addresses all three issues and has become the dominant parameter-efficient fine-tuning method.

## Core Idea

In Transformer models, weight matrices W typically have dimensions d×d (e.g. 4096×4096).

LoRA's key insight: **instead of directly modifying W, approximate the weight change using the product of two small low-rank matrices**:

\`\`\`
h = Wx + BAx = (W + BA)x

Where:
  W ∈ ℝ^{d×d}  — pretrained weights (frozen, not updated)
  A ∈ ℝ^{d×r}  — low-rank matrix A, initialized with N(0, σ²)
  B ∈ ℝ^{r×d}  — low-rank matrix B, initialized to 0
  r ≪ d          — rank, much smaller than d
\`\`\`

![LoRA low-rank adaptation diagram](/images/lora-architecture.png)

**Why this initialization?**
- B=0 at init means ΔW = BA = 0 at the start — pretrained behavior is perfectly preserved
- A is randomly initialized to ensure non-zero gradients from the start, enabling normal training

**Parameter count comparison:**
\`\`\`
Original matrix W:  d × d = 4096 × 4096 = 16,777,216 parameters
LoRA (r=16):        d×r + r×d = 4096×16 + 16×4096 = 131,072 parameters
Reduction: 99.2%
\`\`\`

## LoRA Training — Step by Step

### Step 1: Freeze the original Transformer weights

\`\`\`python
for param in model.parameters():
    param.requires_grad = False  # freeze all — no gradients computed
\`\`\`

After freezing, the original weights don't participate in backprop, drastically reducing VRAM and compute.

### Step 2: Select Transformer attention matrices for low-rank decomposition

Transformer attention includes three core projection matrices:

\`\`\`
Q = W_Q · x    (Query)
K = W_K · x    (Key)
V = W_V · x    (Value)
\`\`\`

LoRA applies low-rank decomposition to selected projections (typically Q and V):

\`\`\`
ΔW_Q = B_Q · A_Q
ΔW_V = B_V · A_V
\`\`\`

### Step 3: Train only the low-rank adapter parameters

\`\`\`python
import torch.nn as nn
import math

class LoRALinear(nn.Module):
    def __init__(self, in_features, out_features, rank=16, alpha=32):
        super().__init__()
        self.rank = rank
        self.alpha = alpha
        self.scaling = alpha / rank

        # Frozen original weights
        self.weight = nn.Parameter(
            torch.randn(out_features, in_features), requires_grad=False
        )
        # Trainable low-rank matrices
        self.lora_A = nn.Parameter(torch.randn(rank, in_features))
        self.lora_B = nn.Parameter(torch.zeros(out_features, rank))  # B init = 0

        nn.init.kaiming_uniform_(self.lora_A, a=math.sqrt(5))

    def forward(self, x):
        # Frozen base path + trainable LoRA path
        base = x @ self.weight.T
        lora = x @ self.lora_A.T @ self.lora_B.T * self.scaling
        return base + lora
\`\`\`

Optimize only A and B:

\`\`\`python
optimizer = torch.optim.AdamW([
    {'params': model.lora_A.parameters()},
    {'params': model.lora_B.parameters()},
])

for batch in dataloader:
    y = model(batch['x'])
    loss = criterion(y, batch['label'])
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()
\`\`\`

### Step 4: Merge weights after training (zero inference overhead)

After training, merge ΔW = BA back into the original weight — inference has zero extra overhead:

\`\`\`
W_merged = W_0 + ΔW = W_0 + B · A
\`\`\`

\`\`\`python
model.q_proj.weight.data += model.lora_B.data @ model.lora_A.data
\`\`\`

### Step 5: Choose merged vs. separate adapters

\`\`\`python
# Option 1: Merged (faster inference, single-task deployment)
model_merged.q_proj.weight.data += model.lora_B.data @ model.lora_A.data

# Option 2: Separate (swap adapters at runtime for multi-task serving)
output = base_output + (x @ lora_A.T @ lora_B.T) * scaling
\`\`\`

## Where LoRA is Applied in Transformers

LoRA primarily targets Multi-Head Attention projection layers:

| Target Modules | Use Case |
|----------------|----------|
| q_proj, v_proj only | Fewest params — good default (original paper recommendation) |
| q_proj, k_proj, v_proj, o_proj | Better attention adaptation |
| + gate_proj, up_proj, down_proj | Full FFN coverage for task-specific fine-tuning |

**Key insight:** Q and V alone typically achieve 90% of full-adapter performance with half the parameters.

## Full LoRA Training Example

\`\`\`python
import torch
import torch.nn as nn
import math

class LoRALinear(nn.Module):
    def __init__(self, d, r, alpha=1):
        super().__init__()
        self.r = r
        self.alpha = alpha
        self.lora_A = nn.Linear(d, r, bias=False)
        self.lora_B = nn.Linear(r, d, bias=False)
        nn.init.normal_(self.lora_A.weight)
        nn.init.zeros_(self.lora_B.weight)

    def forward(self, x):
        return self.alpha * self.lora_B(self.lora_A(x))

class LoRAModel(nn.Module):
    def __init__(self, base_model, rank=4):
        super().__init__()
        self.base_model = base_model
        self.lora = nn.ModuleDict({
            name: LoRALinear(module.in_features, rank)
            for name, module in base_model.named_modules()
            if isinstance(module, nn.Linear)
        })

    def forward(self, x):
        return self.base_model(x) + sum(lora(x) for lora in self.lora.values())

# Example usage
base_model = nn.Sequential(nn.Linear(512, 512))
lora_model = LoRAModel(base_model, rank=4)

optimizer = torch.optim.Adam(lora_model.lora.parameters(), lr=1e-3)
for epoch in range(100):
    x = torch.randn(32, 512)
    y = torch.randn(32, 512)
    loss = nn.MSELoss()(lora_model(x), y)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

print(f"Final loss: {loss.item():.4f}")
\`\`\`

## Variants & Ecosystem

LoRA spawned a rich family of extensions in 2023:

- **QLoRA**: 4-bit quantization + LoRA — enables fine-tuning 65B models on a single consumer GPU
- **AdaLoRA**: Adaptive rank allocation — dynamically adjusts rank r per layer based on importance scores
- **PEFT**: Hugging Face's unified library encapsulating LoRA, Adapter, Prefix Tuning, and more
- **LLaMA Factory / Unsloth**: High-level frameworks that make LoRA training 2–5× faster with even less code

## LoRA vs Full Fine-Tuning

| Dimension | Full Fine-Tuning | LoRA |
|-----------|-----------------|------|
| Parameters updated | 100% | 0.1–1% (only A and B matrices) |
| Memory | Huge (full gradients + optimizer states) | 60–80% reduction — no grads for frozen params |
| Training speed | Slow | ~3× faster |
| Inference overhead | None | None (after merging, identical to base model) |
| Flexibility | Low (one full model per task) | High (plug-and-play, swap at runtime) |
| Task quality | Best | Near-equivalent for most tasks |

**LoRA's key strengths:**
- One base model + many lightweight adapters → multi-task, multi-tenant serving
- Adapter files are tiny (tens of MB) — easy to share, version, and distribute
- Mathematical mergeability — multiple domain adapters can be linearly combined`,
  },
}

export const qlora: TopicContent = {
  id: 'qlora',
  title: { en: 'QLoRA', zh: 'QLora' },
  contentType: 'article',
  content: {
    zh: `## QLoRA

## 一、背景与挑战

LoRA 通过低秩矩阵分解大幅降低了训练参数量，但面对超大模型（百亿参数及以上）时，显存仍然紧张。

这是因为：
- 使用 16/32 位浮点数加载模型本身就占用大量显存
- 传统优化器（如 Adam）需要为每个参数维护两份状态副本，进一步增大显存占用

QLoRA 正是在 LoRA 基础上引入 **4-bit 量化**与**分页优化器**，兼顾高效性与显存节约。

## 二、QLoRA 的核心技术原理

![QLoRA vs LoRA vs Full Finetuning 内存对比](/images/qlora-memory-comparison.png)

如图所示，QLoRA 相比 LoRA 的关键改进是将基础模型量化为 4-bit 存储，并使用分页优化器管理显存峰值。

### 1. 4-bit 存储量化

利用 NF4（NormalFloat4）等量化方法，将预训练模型权重压缩为 4-bit 表示，显存占用大幅减小，同时保持足够的精度：

\`\`\`python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
import torch

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,   # 双重量化：连量化常数也量化，再省 0.4 bit/param
    bnb_4bit_quant_type="nf4"         # NF4 专为权重正态分布设计，精度损失极小
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-13b-hf",
    quantization_config=bnb_config,
    device_map="auto",
)
\`\`\`

**内存对比（13B 模型）：**
\`\`\`
FP16 全量微调：~104 GB
LoRA（FP16）：  ~28 GB
QLoRA（4-bit）：~16 GB  ← 单张 A100 40GB 可运行
\`\`\`

### 2. 低秩适配器（LoRA）

在量化模型基础上，挂载 LoRA 低秩适配器，只训练 A、B 矩阵参数。由于冻结了量化权重，训练显存开销极小：

\`\`\`python
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

# 必须先做 kbit 训练准备（修复量化层的梯度计算）
model = prepare_model_for_kbit_training(model)

lora_config = LoraConfig(
    r=64,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj",
                    "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 159,383,552 || all params: 13,175,865,344 || trainable%: 1.21
\`\`\`

### 3. 分页优化器（Paged Optimizer）

使用分页优化机制，将优化器状态（梯度均值、梯度方差）在需要时从 GPU 换出到 CPU，避免训练中的显存峰值导致 OOM：

\`\`\`python
from bitsandbytes.optim import PagedAdamW32bit

optimizer = PagedAdamW32bit(
    model.parameters(),
    lr=2e-4
)
\`\`\`

结合以上三点，QLoRA 能在极低显存下完成超大模型微调，训练效果媲美全精度微调。

## 三、QLoRA 训练流程

1. **模型权重量化** — 将预训练权重量化为 4-bit NF4 表示，同时保持计算在 BF16/FP16 精度，保证梯度稳定
2. **冻结量化权重** — 量化层参数全部冻结，不参与反向传播
3. **添加 LoRA 适配器** — 在冻结层上挂载可训练的低秩模块 A、B
4. **训练 LoRA 参数** — 仅更新 A 和 B，显存和计算量极小
5. **推理阶段** — 量化权重 + LoRA 权重直接推理，或将 LoRA 合并后推理，无需重新量化

## 四、QLoRA 的优势与适用场景

- **显存消耗极低** — 单张 24GB 显卡（如 RTX 3090）即可微调 33B+ 模型
- **训练资源节省** — 结合量化与低秩微调，计算资源消耗大幅降低
- **性能几乎无损** — 在多个基准任务上，QLoRA 微调效果与全精度微调相近
- **灵活性强** — 适合多任务快速迁移，适配器文件极小，大幅节省存储

## 五、实现注意事项

- **低精度计算** — 推荐 4-bit 量化配合 BF16 计算，精度与效率平衡最佳
- **秩的选择** — r=16 至 r=64 通常效果稳定，任务越复杂可适当增大
- **混合精度** — 推荐 FP16 或 BF16，进一步优化显存和速度
- **框架支持** — Hugging Face PEFT 已完整兼容 QLoRA，几行代码即可上手`,

    en: `## QLoRA

## 1. Background & Challenges

LoRA significantly reduced the number of trainable parameters, but for very large models (tens of billions of parameters), GPU memory remains a bottleneck.

The reasons:
- Loading the model in 16/32-bit floating point already consumes massive VRAM
- Traditional optimizers like Adam maintain two extra state copies per parameter, further amplifying memory usage

QLoRA addresses this by combining LoRA with **4-bit quantization** and a **paged optimizer** — achieving both efficiency and memory savings.

## 2. Core Technical Principles

![QLoRA vs LoRA vs Full Finetuning memory comparison](/images/qlora-memory-comparison.png)

As shown above, QLoRA's key improvement over LoRA is quantizing the base model to 4-bit storage and using a paged optimizer to manage memory spikes.

### 1. 4-bit Weight Quantization

Using NF4 (NormalFloat4) quantization, pretrained model weights are compressed to 4-bit representation, dramatically reducing VRAM while preserving sufficient precision:

\`\`\`python
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
import torch

bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_compute_dtype=torch.float16,
    bnb_4bit_use_double_quant=True,   # double quant: quantize the quant constants too (~0.4 bits saved)
    bnb_4bit_quant_type="nf4"         # NF4 designed for normal-distributed weights — minimal quality loss
)

model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-13b-hf",
    quantization_config=bnb_config,
    device_map="auto",
)
\`\`\`

**Memory comparison (13B model):**
\`\`\`
FP16 full fine-tuning: ~104 GB
LoRA (FP16):            ~28 GB
QLoRA (4-bit):          ~16 GB  ← fits on a single A100 40GB
\`\`\`

### 2. Low-Rank Adapters (LoRA)

On top of the quantized base model, attach LoRA adapters — only A and B matrices are trained. Since quantized weights are frozen, training VRAM overhead is minimal:

\`\`\`python
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training

# Required: patches quantized layers for gradient computation
model = prepare_model_for_kbit_training(model)

lora_config = LoraConfig(
    r=64,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj",
                    "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.05,
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# trainable params: 159,383,552 || all params: 13,175,865,344 || trainable%: 1.21
\`\`\`

### 3. Paged Optimizer

Uses paging to offload optimizer states (gradient mean and variance) from GPU to CPU during memory spikes, preventing OOM crashes during training:

\`\`\`python
from bitsandbytes.optim import PagedAdamW32bit

optimizer = PagedAdamW32bit(
    model.parameters(),
    lr=2e-4
)
\`\`\`

Combining all three, QLoRA enables fine-tuning massive models on minimal VRAM, with quality matching full-precision fine-tuning.

## 3. QLoRA Training Workflow

1. **Quantize weights** — compress pretrained weights to 4-bit NF4; compute in BF16/FP16 for gradient stability
2. **Freeze quantized weights** — all quantized layer params are frozen, excluded from backprop
3. **Attach LoRA adapters** — add trainable low-rank modules A and B on top of frozen layers
4. **Train LoRA params only** — only A and B receive gradients — minimal VRAM and compute
5. **Inference** — use quantized weights + LoRA directly, or merge LoRA into the base model first

## 4. Advantages & Use Cases

- **Ultra-low VRAM** — a single 24GB GPU (e.g. RTX 3090) can fine-tune 33B+ models
- **Resource efficient** — quantization + low-rank training slashes compute and memory cost
- **Near-lossless quality** — QLoRA fine-tuned models match full-precision performance on most benchmarks
- **Highly flexible** — adapters are tiny files; easy to store, share, and swap across tasks

## 5. Implementation Notes

- **Precision** — 4-bit NF4 quantization + BF16 compute is the recommended combination for best quality/efficiency balance
- **Rank selection** — r=16 to r=64 works well for most tasks; increase for more complex domains
- **Mixed precision** — FP16 or BF16 further optimizes VRAM and throughput
- **Framework support** — Hugging Face PEFT fully supports QLoRA; get started with just a few lines of code`,
  },
}

export const adalora: TopicContent = {
  id: 'adalora',
  title: { en: 'AdaLoRA', zh: 'AdaLora' },
  contentType: 'article',
  content: {
    zh: `## AdaLoRA

随着大规模语言模型的不断壮大，如何在有限资源下高效微调模型，成为研究热点。传统 LoRA 固定秩大小 r，难以兼顾所有层的复杂性和任务需求。

AdaLoRA（Adaptive LoRA）创新地引入**动态调整秩的机制**，根据层的重要性和训练过程自动分配参数资源，提升微调效果和效率。

## 一、背景与挑战

LoRA 通过低秩矩阵分解实现参数高效微调，显著降低训练资源成本。

但其固定秩 r 设计对所有层一视同仁，无法针对不同层和任务灵活调整参数预算。

这带来两大问题：

- **资源浪费**：部分简单层被过度分配参数；
- **性能瓶颈**：复杂层参数不足，限制模型表达能力。

因此，动态、按需分配秩大小的需求日益凸显。

## 二、AdaLoRA 的核心技术原理

AdaLoRA 通过引入**动态秩调整机制**，实现训练中对各层低秩参数的自适应分配。

具体来说，AdaLoRA 采用**奇异值分解（SVD）**对增量矩阵进行参数化，利用重要性指标剪枝低影响的奇异值，同时保留重要向量。由于完整 SVD 计算代价高昂，该方法通过**秩参数预算**来加快计算过程，并保持往后恢复的可能性，保证训练稳定。

此外，为了避免繁重的 SVD 计算，AdaLoRA 在训练损失中加入**正交性约束**，规范奇异矩阵 P 和 Q，从而简化训练过程，提升模型稳定性。

### 核心思想

- 训练过程中**监检各层低秩矩阵的重要性指标**（如秩度、权重幅度等）；
- 根据指标**自动调整秩大小**，分配更多参数到关键层，减少不重要层参数；
- 通过**稀疏化约束和正则化**保证秩调整的稳定与收敛。

### 技术流程

1. **初始化**各层低秩矩阵，秩大小设置为最大值；
2. **训练过程中动态调整秩**，剪枝不重要的奇异通道；
3. **定期评估**并重新分配秩大小，实施参数预算的最优分配；
4. **训练结束时**，获得各层最优秩配置。

## 三、AdaLoRA 的优势与适用场景

下图展示了使用 AdaLoRA 微调 DeBERTaV3-base 时，各层各类权重矩阵最终的秩分布。越靠后的层（Layer 9–11）秩越高，说明这些层对任务更重要，被自动分配了更多参数：

![AdaLoRA 各层秩分布热力图](/images/adalora-rank-heatmap.png)

**图示说明：** x 轴为层索引（Layer），y 轴为不同类型的权重矩阵（Wq、Wk、Wv、Wo、Wf1、Wf2），颜色越深表示该矩阵被分配的秩越高。

### 优势

- **提升参数利用率**：动态分配避免参数浪费，强化模型表达能力；
- **适应复杂多变任务**：不同任务对模型层需求差异大，AdaLoRA 能自动调节适应多任务训练；
- **缩小显存占用**：通过剪枝无用奇异通道，降低显存和计算负担；
- **兼容主流微调框架**：可与 PEFT、QLoRA 等结合，扩展微调技术栈。

### 适用场景

- 资源受限但需高性能模型的微调任务；
- 多任务、多领域模型训练；
- 需要自动参数调节的复杂训练环境。

## AdaLoRA vs LoRA 对比

| 对比项 | LoRA | AdaLoRA |
|--------|------|---------|
| 秩分配 | 固定，所有层相同 | 动态，按层重要性自适应分配 |
| 参数效率 | 高 | 更高（避免低重要层浪费） |
| 训练稳定性 | 好 | 好（正交约束保障） |
| 实现复杂度 | 低 | 中（需要 SVD 参数化） |
| 适用场景 | 通用 | 层间差异大的复杂任务 |`,

    en: `## AdaLoRA

As large language models keep scaling up, efficient fine-tuning with limited resources has become a key research challenge. Traditional LoRA fixes the rank r uniformly across all layers, failing to account for the varying complexity and task requirements of different layers.

AdaLoRA (Adaptive LoRA) introduces a **dynamic rank adjustment mechanism** that automatically allocates parameter budgets based on layer importance during training.

## 1. Background & Challenges

LoRA achieves parameter-efficient fine-tuning via low-rank decomposition, significantly reducing training resource costs.

However, its fixed rank r treats all layers equally — unable to flexibly adjust the parameter budget per layer or per task.

This causes two problems:

- **Resource waste**: Simple layers get over-allocated parameters
- **Performance bottleneck**: Complex layers are under-parameterized, limiting model expressiveness

This motivates dynamic, demand-driven rank allocation.

## 2. Core Technical Principles

AdaLoRA introduces a **dynamic rank adjustment mechanism** to adaptively allocate low-rank parameters across layers during training.

Specifically, AdaLoRA parameterizes the incremental weight matrices using **Singular Value Decomposition (SVD)**, pruning low-importance singular values while retaining important singular vectors. Since full SVD is computationally expensive, the method uses a **rank parameter budget** to speed up computation while preserving the ability to recover, ensuring training stability.

Additionally, to avoid expensive SVD computations, AdaLoRA adds an **orthogonality constraint** to the training loss to regularize the singular matrices P and Q, simplifying training and improving stability.

### Core Idea

- **Monitor the importance of each layer's low-rank matrices** during training (based on metrics like rank magnitude, weight amplitude, etc.)
- **Automatically adjust ranks** — allocate more parameters to critical layers, reduce params in less important ones
- Use **sparsification constraints and regularization** to ensure stable and convergent rank adjustment

### Technical Workflow

1. **Initialize** all layer low-rank matrices with maximum rank;
2. **Dynamically adjust ranks** during training — prune unimportant singular channels;
3. **Periodically re-evaluate** and reallocate rank budgets for optimal parameter distribution;
4. **At the end of training**, obtain the optimal rank configuration per layer.

## 3. Advantages & Use Cases

The figure below shows the final rank distribution across layers and weight matrix types when fine-tuning DeBERTaV3-base with AdaLoRA. Later layers (9–11) receive higher ranks, showing they are more important for the task:

![AdaLoRA rank distribution heatmap across layers](/images/adalora-rank-heatmap.png)

**Figure description:** x-axis = layer index, y-axis = weight matrix types (Wq, Wk, Wv, Wo, Wf1, Wf2). Darker color = higher rank allocated to that matrix.

### Advantages

- **Better parameter utilization**: Dynamic allocation avoids waste, enhancing model expressiveness
- **Adapts to complex multi-task scenarios**: AdaLoRA auto-adjusts to different layer demands across tasks
- **Reduced VRAM**: Pruning unimportant singular channels lowers memory and compute overhead
- **Compatible with major frameworks**: Works alongside PEFT, QLoRA, and other fine-tuning tools

### Use Cases

- Fine-tuning tasks requiring high performance under resource constraints
- Multi-task, multi-domain model training
- Complex training environments that benefit from automatic parameter adjustment

## AdaLoRA vs LoRA

| Dimension | LoRA | AdaLoRA |
|-----------|------|---------|
| Rank allocation | Fixed, uniform across all layers | Dynamic, adaptive per layer importance |
| Parameter efficiency | High | Higher (avoids wasting params on low-importance layers) |
| Training stability | Good | Good (orthogonality constraint ensures stability) |
| Implementation complexity | Low | Medium (requires SVD parameterization) |
| Best for | General use | Complex tasks with high layer-to-layer variation |`,
  },
}

export const promptTuning: TopicContent = {
  id: 'prompt-tuning',
  title: { en: 'Prompt Tuning', zh: '提示微调' },
  contentType: 'article',
  content: {
    zh: `## 提示微调

## 一、背景与挑战

传统微调需要为每个任务更新全部模型参数，成本极高。提示微调（Prompt Tuning）提供了一种更轻量的替代方案：

- **冻结模型参数**，只训练少量可学习的提示向量
- 一个预训练模型可服务**多个任务**，只需切换提示
- 参数量极小，训练速度极快

## 二、提示微调的核心技术原理

提示微调的核心思想是：不修改模型权重，而是在输入前加入可训练的连续向量（Soft Prompt），引导模型完成特定任务。

![模型微调 vs 提示微调对比](/images/prompt-tuning-model-vs-prompt.png)

如图所示，传统模型微调需要为每个任务保存一份完整模型副本；而提示微调只需保存极小的任务提示向量，所有任务共享同一个预训练模型。

## 三、常见提示方式

### Prefix Tuning

Prefix Tuning（Li & Liang，2021）在每个 Transformer 层的注意力前缀位置插入可训练的连续向量，模型权重完全冻结，只训练这些前缀向量。

![Prefix Tuning vs Fine-tuning 对比](/images/prompt-tuning-prefix-vs-finetune.png)

**工作原理：**
- 在每层 Attention 的 K、V 前拼接可训练的前缀向量（prefix tokens）
- 前缀向量通过 MLP 生成，避免直接优化不稳定
- 模型的所有原始参数保持冻结

**优点：**
- 一个基础模型 + 多个前缀 → 多任务服务
- 参数量极小（通常只有原模型的 0.1%）
- 推理时无需合并，直接切换前缀

### P-Tuning

P-Tuning 引入**可训练的连续提示向量**，并使用提示编码器（Prompt Encoder）生成这些向量，避免手工设计离散提示（如 "This is a [MASK]"）。

![P-Tuning 离散 vs 连续提示搜索](/images/prompt-tuning-ptuning-discrete-vs-continuous.png)

**传统离散提示 vs P-Tuning：**
- 离散提示：手工或搜索得到的自然语言词语，离散、不可微，优化困难
- P-Tuning：连续嵌入向量，可通过反向传播直接优化

![P-Tuning vs P-Tuning v2 对比](/images/prompt-tuning-ptuning-comparison.png)

**P-Tuning v2 改进：**
- 原始 P-Tuning 只在输入层加提示，效果在小模型上不稳定
- P-Tuning v2 在**每层**都加入可训练提示，类似 Prefix Tuning
- 在中小规模模型和各类 NLU 任务上效果大幅提升

### Prompt Tuning

Prompt Tuning（Lester et al.，2021）是最简单的提示微调形式：只在**输入层**前拼接若干可训练的 soft token，其他层和模型权重完全冻结。

\`\`\`
输入：[soft token 1] [soft token 2] ... [soft token k] [原始输入 tokens]
        ↑ 可训练          ↑ 可训练                        ↑ 冻结
\`\`\`

**特点：**
- 参数量极小（k × embedding_dim，如 100 × 768 = 76,800 个参数）
- 在超大模型（11B+）上效果接近全量微调
- 模型越小效果越差，建议配合大模型使用

## 四、提示微调的优势与使用场景

| 方法 | 插入位置 | 参数量 | 适用模型规模 | 效果 |
|------|---------|--------|------------|------|
| Prompt Tuning | 仅输入层 | 极小（<0.01%） | 超大模型（11B+）| 大模型接近全量 |
| P-Tuning | 输入层（可学习编码器） | 极小 | 中大型 | 较好 |
| P-Tuning v2 | 每层 | 小（<1%） | 中小型 | 接近全量 |
| Prefix Tuning | 每层 Attention | 小（<1%） | 中大型 | 好 |

**最佳使用场景：**
- 资源极度受限，需要在一个模型上服务多个任务
- 不希望修改预训练模型权重（如商业 API 场景）
- 需要快速切换任务而无需重新加载模型`,

    en: `## Prompt Tuning

## 1. Background & Challenges

Traditional fine-tuning requires updating all model parameters for every task — extremely costly. Prompt Tuning offers a much lighter alternative:

- **Freeze all model parameters** — only train a small set of learnable prompt vectors
- One pretrained model can serve **multiple tasks** by simply switching prompts
- Minimal parameter count, extremely fast to train

## 2. Core Technical Principle

The core idea of Prompt Tuning: instead of modifying model weights, prepend trainable continuous vectors (Soft Prompts) to the input to guide the model on a specific task.

![Model Tuning vs Prompt Tuning comparison](/images/prompt-tuning-model-vs-prompt.png)

As shown above, traditional model tuning requires storing a full model copy per task. Prompt tuning only stores tiny task-specific prompt vectors — all tasks share the same pretrained model.

## 3. Common Prompt Tuning Methods

### Prefix Tuning

Prefix Tuning (Li & Liang, 2021) inserts trainable continuous vectors at the prefix position of each Transformer layer's attention. All model weights are frozen; only these prefix vectors are trained.

![Prefix Tuning vs Fine-tuning](/images/prompt-tuning-prefix-vs-finetune.png)

**How it works:**
- Prepend trainable prefix tokens to the K and V in every Attention layer
- Prefix vectors are generated via an MLP for training stability (direct optimization is unstable)
- All original model parameters remain frozen

**Advantages:**
- One base model + many prefixes → multi-task serving
- Very few parameters (typically ~0.1% of the model)
- No weight merging needed at inference — just swap the prefix

### P-Tuning

P-Tuning introduces **trainable continuous prompt vectors** generated by a Prompt Encoder, replacing manually designed discrete prompts (like "This is a [MASK]").

![P-Tuning: discrete vs continuous prompt search](/images/prompt-tuning-ptuning-discrete-vs-continuous.png)

**Discrete prompts vs P-Tuning:**
- Discrete prompts: manually crafted or searched natural language words — discrete, non-differentiable, hard to optimize
- P-Tuning: continuous embedding vectors — directly optimizable via backpropagation

![P-Tuning vs P-Tuning v2](/images/prompt-tuning-ptuning-comparison.png)

**P-Tuning v2 improvements:**
- Original P-Tuning only adds prompts at the input layer — unstable on smaller models
- P-Tuning v2 adds trainable prompts at **every layer**, similar to Prefix Tuning
- Significantly better performance on small-to-medium models and diverse NLU tasks

### Prompt Tuning

Prompt Tuning (Lester et al., 2021) is the simplest form: prepend a few trainable soft tokens only at the **input layer**. All other layers and model weights are completely frozen.

\`\`\`
Input: [soft token 1] [soft token 2] ... [soft token k] [original input tokens]
        ↑ trainable      ↑ trainable                      ↑ frozen
\`\`\`

**Characteristics:**
- Extremely few parameters (k × embedding_dim, e.g. 100 × 768 = 76,800 params)
- Matches full fine-tuning quality on very large models (11B+)
- Performance degrades on smaller models — best paired with large models

## 4. Comparison & Use Cases

| Method | Insertion Point | Param Count | Best Model Scale | Quality |
|--------|----------------|-------------|-----------------|---------|
| Prompt Tuning | Input layer only | Tiny (<0.01%) | Very large (11B+) | Matches full FT at large scale |
| P-Tuning | Input layer (learned encoder) | Tiny | Medium-large | Good |
| P-Tuning v2 | Every layer | Small (<1%) | Small-medium | Near full FT |
| Prefix Tuning | Every Attention layer | Small (<1%) | Medium-large | Good |

**Best use cases:**
- Severely resource-constrained setups needing one model to serve many tasks
- When you cannot modify pretrained model weights (e.g. commercial API scenarios)
- Rapid task switching without model reloading`,
  },
}

export const rlhf: TopicContent = {
  id: 'rlhf',
  title: { en: 'RLHF', zh: 'RLHF' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const sft: TopicContent = {
  id: 'sft',
  title: { en: 'Supervised Fine-Tuning (SFT)', zh: 'SFT监督微调' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const ppo: TopicContent = {
  id: 'ppo',
  title: { en: 'PPO', zh: 'PPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const dpo: TopicContent = {
  id: 'dpo',
  title: { en: 'DPO', zh: 'DPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const grpo: TopicContent = {
  id: 'grpo',
  title: { en: 'GRPO', zh: 'GRPO' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}
