import type { TopicContent } from '../types'

export const transformer: TopicContent = {
  id: 'transformer',
  emoji: '🍌',
  title: { en: 'Original Transformer Architecture', zh: '原始 Transformer 结构回顾' },
  contentType: 'article',
  content: {
    en: `### Recap of Original Transformer Architecture

Before discussing large model architectures, it is necessary to review the **Transformer**—the core foundation of modern large models. Understanding the Transformer is crucial for understanding GPT, BERT, and various multimodal large models.

#### Why Transformer?
Before the Transformer appeared, the NLP field mainly relied on Recurrent Neural Networks (RNN) or Long Short-Term Memory (LSTM) to process sequence data. Although these models can capture sequence information, they had two main problems:
1. **Difficulty in capturing long-distance dependencies**: As sentences get longer, information transmission decays, and it is hard for the model to effectively remember earlier context.
2. **Low training efficiency**: RNNs must be computed sequentially and cannot be trained in parallel, leading to slow training speeds.

In 2017, Vaswani et al. proposed the Transformer. It entirely abandoned RNNs and convolutional structures, relying solely on the **Attention mechanism**, which solved these two problems.

#### Core Structure of Transformer
The overall structure of the Transformer is divided into two parts: the **Encoder** and the **Decoder**, with each part consisting of several stacked layers.

![Transformer Architecture](/images/transformer-architecture.jpg)

##### Encoder
Each encoder layer mainly includes two modules:
1. **Self-Attention**: Every position in the input sequence can attend to other positions in the sequence, capturing long-distance dependencies.
2. **Feed-Forward Network (FFN)**: Each position independently passes through a two-layer fully connected network to enhance non-linear expression capabilities.

The encoder also uses **Residual Connections** and **Layer Normalization** to stabilize training.

##### Decoder
Each decoder layer includes three modules:
1. **Masked Self-Attention**: To ensure that the model can only see already generated words during generation, a mask mechanism is used to prevent looking into the future.
2. **Encoder-Decoder Attention (Cross-Attention)**: The decoder attends to the encoder's output, achieving alignment between the input information and the generated content.
3. **Feed-Forward Network (FFN)**.`,
    zh: `### 原始 Transformer 结构回顾

在谈大模型架构之前，有必要回顾一下 **Transformer** ——它是现代大模型的核心基础。理解Transformer，对于理解GPT、BERT以及各种多模态大模型都非常关键。

#### 为什么会有Transformer
在Transformer出现之前，NLP领域主要依赖循环神经网络（RNN）或长短期记忆网络（LSTM）处理序列数据。这些模型虽然可以捕捉序列信息，但存在两个主要问题：
1. **长距离依赖难捕捉**：当句子变长时，信息传递会衰减，模型很难保持对前文的有效记忆。
2. **训练效率低**：RNN必须按顺序计算，无法并行训练，导致训练速度慢。

2017年，Vaswani等人提出了Transformer，它摒弃了RNN和卷积结构，完全基于**注意力机制（Attention）**，解决了这两个问题。

#### Transformer的核心结构
Transformer的整体结构分为两部分：**编码器（Encoder）和解码器（Decoder）**，每个部分由若干层堆叠而成。

![Transformer核心结构](/images/transformer-architecture.jpg)

##### 编码器（Encoder）
每一层编码器主要包括两个模块：
1. **自注意力机制（Self-Attention）**：输入序列的每个位置都可以关注序列中的其他位置，捕捉长距离依赖关系。
2. **前馈全连接网络（Feed-Forward Network, FFN）**：每个位置独立通过两层全连接网络，增强非线性表达能力。

编码器还使用**残差连接（Residual Connection）**和**层归一化（Layer Normalization）**来稳定训练。

##### 解码器（Decoder）
解码器的每一层包含三个模块：
1. **自注意力机制（Masked Self-Attention）**：为了保证生成时只能看到已生成的词，使用掩码（Mask）机制防止看未来。
2. **编码器-解码器注意力（Cross-Attention）**：解码器通过注意力关注编码器的输出，实现输入信息和生成内容的对齐。
3. **前馈全连接网络（FFN）**。`
  },
}

export const moe: TopicContent = {
  id: 'moe',
  emoji: '🍍',
  title: { en: 'Mixture of Experts (MoE)', zh: 'MOE混合专家架构' },
  contentType: 'article',
  content: {
    en: `### Mixture of Experts (MoE) Architecture

As the parameter scale of Large Language Models (LLMs) grows from billions to hundreds of billions or even trillions, how to save computing power while maintaining performance has become a core research question.

The MoE (Mixture of Experts) architecture emerged precisely in this context.

The core philosophy of MoE is: "For each input to the model, only activate part of the modules, allowing the neural network to 'use part of its brain' during each inference."

This greatly reduces the amount of computation while maintaining or even improving model performance.

#### What is MoE?

MoE (Mixture of Experts) is a sparse activation architecture. Its core idea is that in a certain layer of the model, instead of using all sub-networks (experts), it selects a small subset of "experts" to participate in the forward computation.

Just like when you ask a question, you don't need every expert to answer; you just need to pick a few suitable experts.

#### MoE Architecture Diagram

\`\`\`text
┌────────────┐
\`\`\`

#### How Does MoE Work?

In a given MoE layer, the model contains multiple Experts (expert sub-networks) and a Gating Network:

- **Step 1: Input token**
  For example, if you have the sentence "Hello world", after embedding, each token is a vector.
- **Step 2: Gating function selects experts**
  The gating network decides which experts to activate for each token, usually using a softmax/Top-k strategy.
- **Step 3: Only activate Top-k experts**
  Usually, only k=1 or 2 experts are activated (for example, selecting 2 out of 16 experts), which greatly saves computation.
- **Step 4: Aggregate outputs**
  The activated experts perform forward propagation on the input, and their results are weighted and summed according to the gating scores to obtain the final output.

#### Why does MoE save computation?
(To be continued)`,
    zh: `### MOE混合专家架构

随着大语言模型（LLM）参数规模从十亿级增长到千亿、万亿级，如何在保持性能的同时节省算力，成为研究的核心问题。

MoE（Mixture of Experts, 混合专家）架构正是在这种背景下应运而生。

MoE 的核心理念是：“模型的每个输入，只激活部分模块，让神经网络在每一次推理中‘用一部分大脑’。”

这大大减少了计算量，同时还能保持甚至提升模型性能。

#### 什么是 MoE？

MoE（Mixture of Experts）是一种稀疏激活（sparse activation）架构，其核心思想是在模型的某一层，不使用全部子网络（专家），而是选择其中一小部分“专家”来参与前向计算。

就像你问一个问题时，不需要每个专家都来回答，只要挑几个合适的专家来就行了。

#### MoE 的整体结构图

\`\`\`text
┌────────────┐
\`\`\`

#### MoE 是怎么工作的？

在某个 MoE 层中，模型会包含多个 Expert（专家子网络），以及一个 Gating Network（门控网络）：

- **步骤 1：输入 token**
  比如你有一个句子“Hello world”，经过 embedding 后每个 token 是一个向量。
- **步骤 2：Gating 函数选择专家**
  门控网络对每个 token 决定要激活哪些专家，通常用 softmax/Top-k 策略。
- **步骤 3：只激活 Top‑k 个专家**
  通常只激活 k=1 或 2 个专家（比如从 16 个专家中选择 2 个），大大节省计算量。
- **步骤 4：将输出聚合**
  被激活的专家对输入进行前向传播，其结果根据门控打分进行加权求和，得到最终输出。

#### 为什么 MoE 能节省计算？
（未完）`
  },
}

export const gptSeries: TopicContent = {
  id: 'gpt-series',
  emoji: '🥭',
  title: { en: 'GPT Series', zh: 'GPT系列' },
  contentType: 'article',
  content: {
    en: `### GPT Series

GPT can be said to be incredibly popular, genuinely changing our work and lives.
From writing code and copy, to generating images, chatting, and doing analysis, the GPT series of models has undoubtedly become the representative achievement of Artificial General Intelligence (AGI).

#### GPT-1: The Beginning of General Language Understanding Models

In the era before deep learning became widespread, the field of Natural Language Processing (NLP) faced a common challenge: most models heavily relied on large amounts of manually labeled data. This not only consumed human and material resources but also limited the model's performance in low-resource scenarios. In stark contrast, there is a massive amount of unlabeled text data on the internet. If we could use these unlabeled corpora to learn the deep connections of language, could we train a general, powerful language model capable of transfer learning?

In 2018, OpenAI published a milestone paper.
The paper pointed out two core challenges:
1. How to design effective unsupervised optimization objectives?
2. How to transfer the knowledge learned unsupervised to downstream tasks?

To solve these two problems, GPT-1 proposed a general framework.

#### Unsupervised Pre-training

The goal of the pre-training phase is to train a general language model to capture the statistical structure and semantic knowledge of language from a large amount of unlabeled text. It used the BooksCorpus (containing over 7,000 novels) as training data. Continuous text structure helps the model learn contextual connections.

**1. Model Structure**
It used a 12-layer Transformer Decoder (note, it's a decoder, not a complete Encoder-Decoder), equipped with a self-attention mechanism, which can effectively capture long-distance dependencies.

Among them:
- \`h0\`: Input embedding vector, obtained by adding word embedding \`We\` and position embedding \`Wp\`
- \`We\`: Word vector matrix of the token
- \`Wp\`: Position encoding matrix (learned)
- \`hl\`: Output vector of the L-th layer of the Transformer
- \`TransformerBlock\`: A standard Transformer decoder block, containing multi-head self-attention and a feed-forward network
- \`P(u)\`: Probability distribution obtained by applying softmax to all words (i.e., the prediction result for the current token)

**2. Training Objective**
A standard language modeling task: predicting the next word.

Among them:
- \`L1(U)\`: The loss function for language modeling, the loss value for the entire unlabeled text corpus U
- \`U = {u_1, u_2, ..., u_n}\`: Unlabeled text sequence, where each \`ui\` is a token (word or subword)
- \`k\`: Context window size (indicating how many previous words the current word is predicted based on)
- \`P\`: The predicted probability of the current token \`ui\` given the previous \`k\` tokens, with parameters controlled by the model \`Θ\`
- \`Θ\`: All parameters of the model, including word vectors, Transformer layers, etc.

#### Supervised Fine-Tuning

After completing the general pre-training, the authors transfer the model to specific NLP tasks for fine-tuning, such as sentiment classification, natural language inference, question answering, etc.

**1. Task Adaptation Techniques**
One of the core advantages of the GPT-1 model is that it uses a unified architecture for different tasks. Since the input formats of different tasks vary (such as single sentences, sentence pairs, question-answering triplets), GPT-1 format them into a unified sequence.`,
    zh: `### GPT系列

GPT可以说是火的一塌糊涂，切切实实的改变了我们的工作和生活。
从写代码、写文案，到作图、聊天、做分析，GPT 系列模型已然成为通用人工智能的代表性成果。

#### GPT1：通用语言理解模型的开端

在深度学习尚未普及的年代，自然语言处理（NLP）领域面临一个普遍难题：大多数模型都严重依赖大量人工标注的数据，这不仅耗费人力物力，还限制了模型在低资源场景下的表现。而与此形成鲜明对比的是，互联网上存在海量未标注的文本数据。如果能利用这些无标签语料学习语言的深层联系，我们是否能训练出通用、强大、具备迁移能力的语言模型？

2018 年，OpenAI 发布了里程碑式论文。论文指出了两大核心挑战：
1. 如何设计有效的无监督优化目标？
2. 如何将无监督学习到的知识迁移到下游任务？

为了解决这两个问题，GPT-1 提出了一个通用的框架。

#### 无监督预训练

预训练阶段的目标是训练一个通用语言模型，从大量未标注文本中捕捉语言的统计结构与语义知识。使用了BooksCorpus（包含 7000 多本小说）作为训练数据，连续文本结构有助于模型学习上下文联系。

**1. 模型结构**
使用了一个 12 层的 Transformer Decoder（注意，是解码器而非完整的 Encoder-Decoder），具备自注意力机制，能有效捕捉长距离依赖。

其中：
- \`h0\`：输入嵌入向量，由词嵌入\`We\`和位置嵌入\`Wp\`相加得到
- \`We\`：token 的词向量矩阵
- \`Wp\`：位置编码矩阵（learned）
- \`hl\`：第 L层 Transformer 的输出向量
- \`TransformerBlock\`：一个标准 Transformer 解码器块，包含多头自注意力和前馈网络
- \`P(u)\`：对所有词进行 softmax 得到的概率分布（即当前 token 的预测结果）

**2. 训练目标**
标准的语言建模任务，预测下一个单词。

其中：
- \`L1(U)\`：语言建模的损失函数，对整个未标注文本语料 U 的损失值
- \`U = {u_1, u_2, ..., u_n}\`：未标注的文本序列，每个 ui 是一个 token（词或子词）
- \`k\`：上下文窗口大小（表示当前词是基于前多少个词预测的）
- \`P\`：当前 token ui 在给定前 k 个 token 的条件下的预测概率，参数由模型 Θ 控制
- \`Θ\`：模型的全部参数，包括词向量、Transformer 层等

#### 有监督微调

在完成通用预训练之后，作者将模型迁移到具体的 NLP 任务中进行微调，例如情感分类、自然语言推理、问答等。

**1. 任务适配技巧**
GPT-1 模型的核心优势之一，是其使用了统一的架构。
由于不同任务的输入形式各不相同（如单句、句对、问答三元组），GPT-1 引入了统一序列转换，将所有的输入都规整为统一形式的序列。`
  },
}

export const llamaSeries: TopicContent = {
  id: 'llama-series',
  emoji: '🍎',
  title: { en: 'LLaMA Series', zh: 'LLAMA系列' },
  contentType: 'article',
  content: {
    en: `### LLaMA Series

After delving into the development of the GPT series models, we cannot help but ask: Is the future of large models inevitably "bigger is better"?

#### LLaMA 1

##### 1. What is LLaMA?

LLaMA (Large Language Model Meta AI) is a series of foundational language models released by Meta AI, with parameter sizes ranging from 7B to 65B.
The performance of LLaMA-13B has already surpassed GPT-3, while LLaMA-65B can rival PaLM-540B!

##### 2. What are the Technical Innovations?

LLaMA's powerful performance does not come from nowhere; it benefits from improvements made in several aspects:

**2.1 Architectural Optimization**
- **Pre-Normalization (Pre-Norm)**: Uses RMSNorm to improve training stability.
- **SwiGLU Activation Function**: Replaces ReLU to improve expressive capability.
- **RoPE Positional Encoding**: Uses Rotary Positional Encoding instead of absolute positional encoding to retain sequence information.
- **Efficient Attention Mechanism**: Uses optimized causal attention from xformers to reduce memory consumption.
- **Gradient Checkpointing and Parallel Training**: Saves GPU memory overhead, making the training of 65B possible.

**2.2 Public and Diverse Data Sources**

Unlike models such as GPT-3, LLaMA training is based entirely on public datasets.`,
    zh: `### LLAMA系列

在深入了解了 GPT 系列模型的发展脉络之后，我们不禁要问：大模型的未来一定是越大越强吗？

#### LLaMA 1

##### 一、LLaMA 是什么？

LLaMA（Large Language Model Meta AI）是 Meta AI 发布的一系列基础语言模型，参数规模从 7B 到 65B 不等。
LLaMA-13B 的性能已经超过了 GPT-3，而 LLaMA-65B 可以和 PaLM-540B 平起平坐！

##### 二、技术创新点有哪些？

LLaMA 的强大性能不是凭空而来的，而是得益于它在多个方面做出的改进：

**2.1 架构优化**
- **预归一化（Pre-Norm）**：使用 RMSNorm 提升训练稳定性；
- **SwiGLU 激活函数**：替代 ReLU，提高表达能力；
- **RoPE 位置编码**：用旋转位置编码代替绝对位置编码，保留序列信息；
- **高效注意力机制**：使用 xformers 中优化的因果注意力，降低内存消耗；
- **梯度检查点和并行训练**：节省显存开销，使训练 65B 成为可能。

**2.2 数据来源公开且多样**

与 GPT-3 等模型不同，LLaMA 训练完全基于公开数据集。`
  },
}

export const deepseekSeries: TopicContent = {
  id: 'deepseek-series',
  emoji: '🍏',
  title: { en: 'DeepSeek Series', zh: 'DeepSeek系列' },
  contentType: 'article',
  content: {
    en: `### DeepSeek Series

#### DeepSeek LLM

Large Language Models (LLMs) have become a critical path towards Artificial General Intelligence (AGI). Since ChatGPT ignited public attention, the open-source community has also been catching up constantly, releasing models like LLaMA, Mistral, Yi, etc., gradually narrowing the gap with closed-source models.
DeepSeek LLM is an open-source effort from DeepSeek-AI. It not only continues the high-level engineering practices in architecture, training scheduling, data processing, etc., but also further explores **how to optimize the scalability and performance of large models from a long-term perspective**.

##### 1. Model Parameter Configuration: Smooth Scaling from 7B to 67B
DeepSeek LLM offers two versions: 7B and 67B, which have 30 and 95 Transformer layers respectively. In terms of parameter scale, it benchmarks LLaMA, but makes key optimizations in detail design:
- Uses **PreNorm architecture**
- Activation function is **SwiGLU**
- Positional encoding uses **Rotary Embedding (RoPE)**
- 67B model uses **Grouped-Query Attention (GQA)**, significantly optimizing KV cache usage and inference efficiency

It is worth noting that DeepSeek did not simply widen the FFN, but rather by **increasing network depth**.

##### 2. Grouped-Query Attention (GQA): Key for Inference Cost Optimization
In traditional Multi-Head Attention, each attention head independently calculates three sets of vectors: query-key-value. As the model grows, the overhead of the KV cache expands rapidly.
DeepSeek 67B chose GQA to replace MHA:
- Sharing Key/Value significantly reduces KV cache occupation
- **Optimizes computational and memory requirements during inference** without significantly affecting model performance
- Compared to similar models using traditional MHA, **inference is faster under the same hardware resources**

This choice allows DeepSeek to be better deployed in various application scenarios and improves the model's cost-effectiveness during the deployment phase.

##### 3. Multi-step Learning Rate Scheduler: Laying the Foundation for Long-term Training
Unlike the cosine learning rate scheduler used by most LLMs, DeepSeek LLM introduces a **multi-stage learning rate**:

![DeepSeek Learning Rate Scheduler](/images/deepseek-learning-rate.jpg)

- Initial warm-up stage: gradually increase the learning rate for the first 2000 steps
- Mid stage: drop the learning rate to 31.6% after training 80% of tokens
- Late stage: drop again to 10% after training 90% of tokens

This strategy brings two direct benefits:
- **Supports staged training/continual training**, allowing future addition of data and re-finetuning
- **Smoother loss curve**, avoiding early oscillation and improving training stability

DeepSeek explicitly points out that while this strategy does not differ much in final performance compared to cosine scheduling, it is **more controllable in engineering and more conducive to long-cycle training**.

##### 4. Training Framework and Engineering Optimization: Behind-the-scenes Engineering Supporting Large Models
DeepSeek uses a self-developed efficient training framework **HAI-LLM**:
- Supports four parallel methods: 1F1B, tensor, data, and sequence
- Adopts Flash Attention and ZeRO-1 to optimize memory utilization
- Models trained in bf16 and accumulate gradients in fp32
- **Asynchronously saves weights and optimizer states every 5 minutes**, greatly reducing failure recovery costs
- Also supports **seamlessly resuming training** between different parallel configurations

DeepSeek LLM is not just another open-source model; it is a systematic exploration of LLM architecture and training methods from a long-term perspective. From architectural fine-tuning to large-scale training support, it demonstrates the tremendous progress of domestic open-source LLMs in engineering capabilities and model design. If you care about the inference efficiency, scalability, and deployment landing of large models, this architectural design is worth studying in depth.

#### DeepSeekMoE
As large language models continue to break through limits of scale, **Mixture-of-Experts (MoE)**... (To be continued)`,
    zh: `### DeepSeek系列

#### DeepSeek LLM

大语言模型（LLM）已经成为通往通用人工智能（AGI）的关键路径。自 ChatGPT 引爆公众关注后，开源社区也不断追赶，推出 LLaMA、Mistral、Yi 等模型，逐步缩小与闭源模型的差距。
DeepSeek LLM 是一项来自 DeepSeek-AI 的开源努力，不仅在架构、训练调度、数据处理等方面延续了高水准的工程实践，更进一步探索了**如何在长期主义视角下优化大模型的可扩展性与性能**。

##### 一、模型参数配置：从 7B 到 67B 的平滑扩展
DeepSeek LLM 提供两个版本：7B 和 67B，分别拥有 30 层与 95 层 Transformer 层，参数规模上对标 LLaMA，但在细节设计上做出了关键优化：
- 使用 **PreNorm 架构**
- 激活函数为 **SwiGLU**
- 位置编码采用 **Rotary Embedding（RoPE）**
- 67B 模型采用 **Grouped-Query Attention（GQA）**，大幅优化 KV 缓存使用和推理效率

值得注意的是，DeepSeek 并没有简单地加宽 FFN，而是通过**增加网络深度**。

##### 二、Grouped-Query Attention（GQA）：推理成本优化关键
在传统的 Multi-Head Attention 中，每个注意力头都要独立计算 query-key-value 三组向量，随着模型增大，KV 缓存的开销迅速膨胀。
DeepSeek 67B 选择了 GQA 替代 MHA：
- 共享 Key/Value 的方式大幅减少 KV 缓存占用
- 在不显著影响模型性能的前提下，**优化推理过程中的计算和显存需求**
- 对比使用传统 MHA 的同类模型，**在相同硬件资源下推理更快**

这一选择使得 DeepSeek 能更好地部署在多种应用场景中，并提高模型在部署阶段的性价比。

##### 三、多步学习率调度器：为长期训练奠定基础
不同于多数 LLM 使用的余弦学习率调度器，DeepSeek LLM 引入了**多阶段学习率**：

![DeepSeek 多阶段学习率](/images/deepseek-learning-rate.jpg)

- 初始热身阶段：前 2000 步逐步升高学习率
- 中期阶段：训练 80% token 后将学习率降至 31.6%
- 后期阶段：训练 90% token 后再次降至 10%

这一策略带来两个直接好处：
- **支持阶段性训练/持续训练（continual training）**，可在未来添加数据、重新微调
- **损失曲线更平稳**，避免早期震荡，提升训练稳定性

DeepSeek 明确指出，虽然这种策略与余弦调度相比最终性能差别不大，但在**工程上更可控、更有利于长周期训练**。

##### 四、训练框架与工程优化：支撑大模型运行的幕后工程
DeepSeek 使用自研的高效训练框架 **HAI-LLM**：
- 支持 1F1B、张量、数据、序列四种并行方式
- 采用 Flash Attention、ZeRO-1 优化内存利用率
- 模型以 bf16 训练、fp32 累积梯度
- **每 5 分钟异步保存权重与优化器状态**，极大减少故障恢复成本
- 此外还支持在不同并行配置间**无缝恢复训练**

DeepSeek LLM 不只是又一个开源模型，它是对长期主义视角下 LLM 架构与训练方式的系统性探索。从架构微调到大规模训练支持，它展示了国产开源 LLM 在工程能力与模型设计上的巨大进步。如果你关心大模型的推理效率、扩展性与部署落地，这份架构设计值得深入研究。

#### DeepSeekMoE
随着大语言模型不断突破规模极限，**Mixture-of-Experts（MoE）**……（未完待续）`
  },
}

export const longcatSeries: TopicContent = {
  id: 'longcat-series',
  emoji: '🍐',
  title: { en: 'LongCat Series', zh: 'LongCat系列' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}

export const kimiSeries: TopicContent = {
  id: 'kimi-series',
  emoji: '🍑',
  title: { en: 'Kimi Series', zh: 'Kimi系列' },
  contentType: 'coming-soon',
  content: { en: '', zh: '' },
}
