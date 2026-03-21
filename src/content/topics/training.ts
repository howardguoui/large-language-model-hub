import type { TopicContent } from '../types'

export const dataPreparation: TopicContent = {
  id: 'data-preparation',
  title: { en: 'Data Preparation', zh: '数据准备' },
  contentType: 'article',
  content: {
    en: `## Common Data Sources

1. **WebText**
   - Requires attention to copyright and legality, while selecting high-quality content.
2. **Common Crawl**
   - Open-source web scraped data with broad coverage and massive text volume.
   - The quality of raw data varies greatly and requires strict cleaning.
3. **Books, Papers, and Code**
   - BooksCorpus, open-source GitHub code, etc., provide structured and specialized content.
   - This data helps the model learn long-text logic, professional knowledge, and code semantics.

## The Importance of Data Cleaning

Feeding raw data directly to the model for training will cause many problems:
- Spam, advertisements, and low-quality text will affect model performance.
- Duplicate content can cause the model to overfit certain segments.
- Noise and non-standard text can cause the model to learn incorrect expressions.

Therefore, data cleaning is an indispensable step, including removing HTML tags, filtering low-quality web pages, standardizing text, and removing gibberish or non-target language content.

## Data Deduplication and Quality Control

During LLM training, duplicate data not only wastes computing power but also causes the model to memorize answers, reducing its generalization ability. Common methods include:

1. **Hash Deduplication**: Calculating text fingerprints (such as MinHash, SimHash) to quickly identify duplicate or highly similar content.
2. **Semantic Deduplication**: Using embedding vectors to calculate semantic similarity, removing content that has the same meaning but different expressions.
3. **Quality Control**: Scoring or filtering text content to ensure that the training data meets standards in grammar, logic, and diversity.

High-quality, deduplicated data allows the model to learn more valuable knowledge instead of simply repeating and memorizing.

## Data Augmentation and Synthesis

To improve the model's generalization ability and robustness, training data is often augmented or synthesized:

- **Text Augmentation**: Synonym replacement, random insertion or deletion, data noise simulation, etc. Especially useful for low-resource languages or specific tasks.
- **Cross-modal Synthesis**: Text+image, image+video, audio+text, etc., synthesizing multimodal training samples. For example, using existing images to generate text descriptions, or generating image+text pairs to train multimodal models.
- **Data Expansion**: For certain low-sample tasks, using generative models to generate additional training data to alleviate data scarcity.

These methods make the model more stable and reliable when facing various changes in the real world.

## Multilingual and Cross-modal Data

The universality of LLMs is reflected not only in task adaptation but also in **language and modality diversity**:
- **Multilingual Data**: Training not only on English but also covering multiple languages like Chinese, Spanish, French, and Arabic. Crucial for multilingual understanding, translation, and generation capabilities.
- **Cross-modal Data**: Mixed training of text, images, audio, and video allows the model to process complex real-world scenarios. For example, CLIP used a massive amount of image-text pairs during training. This cross-modal data enables the model to understand images by seeing text and understand text by seeing images.

Multilingual and cross-modal training ensures that LLMs not only understand a single language or a single type of data but truly possess broadly applicable capabilities.

## Summary

From a data perspective, the key to LLM training is not just large volume, but more importantly:
1. **Quality First**: Cleaning, deduplication, and quality control are the foundation.
2. **Diversity**: The diversity of languages, tasks, and modalities determines the model's general capabilities.
3. **Augmentation and Synthesis**: Moderate augmentation makes the model more stable and reliable.

It can be said that no matter how large the model is, if the data is not good enough, what is trained will only be theoretical. High-quality, rich, and multimodal data is the true source of an LLM's power.`,
    zh: `## 常见数据源

1. **WebText**
   - 需要注意版权和合法性，同时挑选质量较高的内容。
2. **Common Crawl**
   - 开源的网页抓取数据，覆盖面广，文本量巨大。
   - 原始数据质量参差不齐，需要经过严格清洗。
3. **Books、论文和代码**
   - BooksCorpus、GitHub开源代码等提供了结构化、专业化的内容。
   - 这些数据有助于模型学习长文本逻辑、专业知识和代码语义。

## 数据清洗的重要性

直接把原始数据喂给模型训练，问题会很多：
- 垃圾信息、广告、低质量文本会影响模型效果。
- 重复内容会导致模型过拟合某些片段。
- 噪声和不规范文本会让模型学到错误表达。

所以数据清洗是不可省略的一步，包括去除HTML标签、过滤低质量网页、标准化文本、去掉乱码或非目标语言内容等。

## 数据去重与质量控制

大模型训练时，重复数据不仅浪费算力，还会让模型记住答案，降低泛化能力。常用方法有：

1. **哈希去重**：计算文本指纹（如MinHash、SimHash）来快速发现重复或高度相似的内容。
2. **语义去重**：利用嵌入向量（Embedding）计算语义相似度，去掉意思重复但表达不同的内容。
3. **质量控制**：对文本内容进行打分或筛选，确保训练数据在语法、逻辑和多样性上满足标准。

高质量、去重后的数据能让模型学到更多有价值的知识，而不是简单重复记忆。

## 数据增强与合成

为了提升模型的泛化能力和鲁棒性，训练数据往往会做增强或合成处理：

- **文本增强**：同义词替换、随机插入或删除、数据噪声模拟等。在低资源语言或特定任务上尤其有用。
- **跨模态合成**：文本+图像、图像+视频、音频+文本等，通过合成生成多模态训练样本。例如，使用现有图像生成文本描述，或者生成图像+文本对用于训练多模态模型。
- **数据扩充**：对某些少量样本任务，通过生成式模型生成额外训练数据，缓解数据稀缺问题。

这些方法让模型在面对真实世界中各种变化时，更加稳定和可靠。

## 多语种与跨模态数据

大模型的通用性不仅体现在任务适应上，也体现在**语言和模态的多样性**：
- **多语种数据**：不仅训练英语，还要覆盖中文、西班牙语、法语、阿拉伯语等多种语言。对多语种理解、翻译和生成能力至关重要。
- **跨模态数据**：文本、图像、音频、视频混合训练，让模型能处理复杂现实场景。例如CLIP训练时就使用了大量图文对，这种跨模态数据让模型可以看到文字就理解图像，看到图像也能理解文字。

多语种和跨模态训练，使得大模型不仅懂一门语言或一个类型的数据，而是真正拥有广泛适用的能力。

## 总结

从数据层面看，大模型训练的关键不只是量大，更在于：
1. **质量优先**：清洗、去重和质量控制是基础。
2. **多样性**：语言、任务、模态的多样性决定模型的通用能力。
3. **增强与合成**：适度增强让模型更稳、更可靠。

可以说，模型再大，如果数据不够好，训练出来的也只能是纸上谈兵。而高质量、丰富、多模态的数据，才是大模型强大的真正源头。`
  }
}


export const dataStorage: TopicContent = {
  id: 'data-storage',
  title: { en: 'Data Storage', zh: '数据存储' },
  contentType: 'article',
  content: {
    en: `## File Formats and Version Management

For file formats, **sequential streamable containerized shards** are the mainstream choice, such as WebDataset (tar shards), TFRecord, Parquet, or LMDB. A reasonable shard size (typically between 100MB and 2GB) can reduce metadata overhead while balancing network bandwidth and node memory. To support reproducible and resumable training, establishing sample-level indices and global shuffle maps is required. Also important is avoiding invalid data amplification by using MinHash/SimHash for text and perceptual hashing for images.

Data **version management** should not be ignored. By versioning data packages (e.g., \`imagenet-1.0.3\`) and using tools like DVC or LakeFS, you can maintain consistency and traceability across "Data—Code—Model."

## Preprocessing and Augmentation: Offline vs Online

Preprocessing and data augmentation are another key to training efficiency. A general principle is: **do it offline if possible**.

- **Offline Processing**: Suitable for fixed procedures like decoding, normalization, tokenization, image resizing, or cropping. This significantly reduces CPU pressure during training and ensures stable data throughput. The advantages are high throughput and reusability, while the disadvantages are slightly reduced flexibility and more storage space consumption.
- **Online Processing**: More suitable for augmentation techniques requiring randomness or diversity, such as random cropping, color jittering, MixUp/CutMix, SpecAugment, etc. These operations clearly help model generalization and are often lightweight and vectorizable, so keeping them in the DataLoader stage is sufficient.

For NLP, tokenization and chunking can be done in advance to generate packed samples concatenated by context length. For images or video, frame indices and clip manifests can be built ahead of time to achieve zero-copy reads during training.

## Caching Strategies

To avoid GPU idling due to I/O bottlenecks, **cache design** is crucial.

At the local machine level, full use of **Page Cache and mmap** should be made, as large sequential reads can dramatically increase cache hit rates. Additionally, prefetching shards from object storage to local NVMe SSDs for use as a short-term cache can significantly boost efficiency in the first training epoch. A common practice is warm-up before training, pre-pulling data for the first few epochs to prevent initial throughput fluctuations.

At the cluster level, Redis, RocksDB, or Alluxio can be deployed as a shared caching layer for hot data and indices. Cache consistency can be managed through data version numbers, with asynchronous cleanup or version eviction after training tasks complete to ensure resource utilization.

A neat trick is to try to **use sequential reads and large-batch prefetches instead of frequent small-block random I/O**, which is particularly important for distributed training.

## Accelerating Data Loading and Pipeline Parallelism

Besides storage and caching, parallel optimization of data loading and training pipelines is equally important.

In **PyTorch**, efficiency can be improved by tuning DataLoader parameters: setting an appropriate \`num_workers\` (usually half to all CPU cores) and enabling \`pin_memory=True\`.
\`\`\`python
loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=global_bs_per_rank,
    num_workers=8,
    pin_memory=True,
    prefetch_factor=2
)
\`\`\`

In **TensorFlow**, the automatic tuning feature of \`tf.data.AUTOTUNE\` simplifies parallelism and prefetch configurations.
\`\`\`python
ds = (tf.data.TFRecordDataset(files, num_parallel_reads=tf.data.AUTOTUNE)
      .map(parse_fn, num_parallel_calls=tf.data.AUTOTUNE)
      .prefetch(tf.data.AUTOTUNE))
\`\`\`

For remote object storage, utilizing utilities like fsspec/s3fs/gcsfs paired with large shard objects and range reads is recommended to avoid frequent small-file accesses. The streaming modes of WebDataset or Hugging Face Datasets also effectively relieve local storage pressure.

Furthermore, LLM training often uses **packed samples** techniques to concatenate multiple short sequences into long sequences close to the target context length, thereby increasing GPU/TPU utilization. Across epochs, randomness and reproducibility are guaranteed through multiple shuffle maps.

## Network and Scheduling

Finally, the impact of the network and scheduling levels on training throughput cannot be ignored. Topology-aware scheduling ensures training nodes are located as close to data storage gateways as possible, reducing latency and costs associated with crossing racks or availability zones. High-speed interconnects (like RDMA, InfiniBand, RoCE) ensure that gradient communication and data I/O do not compete for bandwidth.

When budgeting bandwidth, a preliminary estimation formula is: **Per GPU sample size × QPS × Number of nodes**, leaving a 20%~30% margin. If bottlenecks are found, throttling and backpressure mechanisms can be added at the data entry point to prevent cluster overload.`,
    zh: `## 文件格式与版本管理

在文件格式上，**顺序可流式读取的容器化分片**是主流选择，如 WebDataset（tar 分片）、TFRecord、Parquet 或 LMDB。合理的分片大小（通常在 100MB~2GB 之间）既能降低元数据开销，又能兼顾网络带宽与节点内存。为了支持可重复、可恢复训练，还需要建立样本级索引和全局 shuffle map。同样重要，文本可以使用 MinHash/SimHash，图像可用感知哈希，避免无效数据放大。

数据的**版本管理**也不可忽视。通过数据按版本打包（如 \`imagenet-1.0.3\`），配合 DVC 或 LakeFS 等工具，可以让“数据—代码—模型”保持一致性和可追溯性。

## 预处理与增广：离线 vs 在线

预处理和数据增强是训练效率的另一大关键。一个普遍的原则是：**能离线就离线**。

- **离线处理**：适合完成解码、标准化、分词、图像 resize 或裁剪等固定流程，这样能显著降低训练时的 CPU 压力，并保证数据吞吐稳定。其优势是吞吐高、复用性强，缺点是灵活性略差、存储空间消耗稍多。
- **在线处理**：更适合需要随机性或多样化的增强手段，比如随机裁剪、颜色抖动、MixUp/CutMix、SpecAugment 等。这类操作对模型泛化能力帮助明显，且往往轻量、可矢量化，因此保留在 DataLoader 阶段即可。

对于 NLP，可以提前完成分词、分块，生成按上下文长度拼接的 packed samples；对于图像或视频，可以提前建立帧索引和 clip manifest，实现训练时的零拷贝读取。

## 缓存策略

为了避免 GPU 因 I/O 停摆，**缓存设计**至关重要。

在本地机器层面，可以充分利用 **Page Cache 和 mmap**，大块顺序读能极大提升缓存命中率。同时，将对象存储中的分片预拉取到本地 NVMe，作为短期缓存使用，也能明显提升首轮训练效率。常见做法是训练前做 warm-up，提前拉取头几个 epoch 所需数据，避免初期吞吐波动。

在集群层面，可以部署 Redis、RocksDB 或 Alluxio 作为热点数据和索引的共享缓存层。缓存一致性可通过数据版本号来管理，训练任务完成后再异步清理或逐版本淘汰，保证资源利用率。

一个小技巧是尽量**使用顺序读和大批量 prefetch，而不是频繁的小块随机 I/O**，这对分布式训练尤其重要。

## 加速数据加载与管线并行

除了存储与缓存，数据加载和训练管线的并行优化同样重要。

在 **PyTorch** 中，可以通过调整 DataLoader 参数来提升效率：合理设置 \`num_workers\`（通常为 CPU 核数的一半到等于核数）、开启 \`pin_memory=True\`。
\`\`\`python
loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=global_bs_per_rank,
    num_workers=8,
    pin_memory=True,
    prefetch_factor=2
)
\`\`\`

在 **TensorFlow** 中，\`tf.data.AUTOTUNE\` 的自动调优功能可以简化并行与预取配置。
\`\`\`python
ds = (tf.data.TFRecordDataset(files, num_parallel_reads=tf.data.AUTOTUNE)
      .map(parse_fn, num_parallel_calls=tf.data.AUTOTUNE)
      .prefetch(tf.data.AUTOTUNE))
\`\`\`

对于远程对象存储，推荐配合 fsspec/s3fs/gcsfs 等工具，结合分片大对象和范围读取，避免频繁小文件访问。WebDataset 或 Hugging Face Datasets 的流式模式，也能很好地缓解本地存储压力。

另外，大模型训练常常采用 **packed samples** 技术，将多个短序列拼接为接近目标上下文长度的长序列，提高 GPU/TPU 的利用率。跨 epoch 时，通过多份 shuffle map 保证随机性与可复现性。

## 网络与调度

最后，网络与调度层面对训练吞吐的影响不容忽视。拓扑感知调度可以让训练节点尽量靠近数据存储网关，减少跨机架或跨可用区的延迟和费用。高速互联（如 RDMA、InfiniBand、RoCE）则能保证梯度通信和数据 I/O 不相互抢占带宽。

在做带宽预算时，可以先估算公式：**每 GPU 样本大小 × QPS × 节点数**，并预留 20%~30% 的余量。如果发现瓶颈，可以在数据入口增加节流与回压机制，防止集群过载。`
  }
}

export const gpuVsTpu: TopicContent = {
  id: 'gpu-vs-tpu',
  title: { en: 'GPU vs TPU', zh: 'GPU vs TPU' },
  contentType: 'article',
  content: {
    en: `## What Are GPUs and TPUs?

When training large language models, the choice of hardware accelerator fundamentally determines your training speed, cost, and flexibility. The two dominant options are **GPUs (Graphics Processing Units)** and **TPUs (Tensor Processing Units)**.

**GPUs** were originally designed for rendering graphics, but their massive parallel architecture made them ideal for deep learning. NVIDIA dominates this space with the A100, H100, and H200 series.

**TPUs** are Google's custom ASICs (Application-Specific Integrated Circuits) built exclusively for matrix multiplication — the core operation in neural network training and inference.

---

## GPU Architecture

GPUs contain thousands of smaller, simpler cores optimized for parallel execution. Key characteristics:

- **CUDA Cores / Tensor Cores**: Thousands of parallel processing units. Tensor Cores are specialized for matrix multiply-accumulate (MMA) operations critical for deep learning.
- **High Bandwidth Memory (HBM)**: H100 has up to 80GB HBM3 with ~3.35 TB/s memory bandwidth.
- **NVLink / NVSwitch**: NVIDIA's high-speed interconnect for multi-GPU communication within a node (up to 900 GB/s bidirectional on H100).
- **CUDA Ecosystem**: Decades of software tooling — cuDNN, cuBLAS, NCCL — with broad framework support (PyTorch, TensorFlow, JAX).

### NVIDIA GPU Generations for LLM Training

| GPU | Memory | Bandwidth | FP16 TFLOPs | Key Features |
|-----|--------|-----------|-------------|-------------|
| A100 (80GB) | 80GB HBM2e | 2 TB/s | 312 | MIG support |
| H100 (SXM5) | 80GB HBM3 | 3.35 TB/s | 989 | Transformer Engine, FP8 |
| H200 | 141GB HBM3e | 4.8 TB/s | 989 | Larger memory |

---

## TPU Architecture

TPUs take a fundamentally different approach — they are a **systolic array** architecture optimized for matrix multiplication.

- **Matrix Multiply Units (MXUs)**: The heart of a TPU, performing 128×128 matrix multiplies per cycle.
- **High Bandwidth Memory**: TPU v4 has 32GB HBM per chip.
- **Inter-Chip Interconnect (ICI)**: TPU chips connect via high-speed optical interconnects in a 3D torus topology, enabling massive scale-out.
- **TPU Pods**: Google's largest configurations scale to thousands of chips in a single logical unit — TPU v4 Pods have 4096 chips connected at 1.2 Pb/s aggregate bandwidth.
- **Software**: Primarily JAX + XLA compiler. TensorFlow also supported; PyTorch/XLA provides limited compatibility.

### TPU Generations

| TPU | Memory/chip | ICI Bandwidth | Key Use |
|-----|-------------|---------------|---------|
| TPU v3 | 16GB HBM | 656 GB/s | Legacy |
| TPU v4 | 32GB HBM | 1.2 Pb/s (Pod) | LLM training |
| TPU v5e | 16GB HBM | Efficient inference | Cost-optimized |
| TPU v5p | 95GB HBM | Training flagship | Frontier models |

---

## Key Differences

### 1. Flexibility vs Specialization

GPUs are **general-purpose** — you can run arbitrary CUDA kernels, debug with familiar tools, and quickly prototype new architectures. TPUs are **specialized** — XLA compilation enforces static shapes, making rapid experimentation harder but steady-state throughput higher for well-defined workloads.

### 2. Software Ecosystem

| Aspect | GPU | TPU |
|--------|-----|-----|
| Primary framework | PyTorch (dominant) | JAX / XLA |
| Debugging | Mature (nsight, cuda-gdb) | Limited |
| Custom ops | Easy (CUDA) | Harder (XLA) |
| Community | Very large | Growing |

### 3. Memory Capacity

For very large models, memory per chip matters:
- H200 offers 141GB per GPU — critical for large context lengths.
- TPU v5p offers 95GB per chip, but TPU Pods scale more seamlessly.

### 4. Cost and Availability

- **GPUs**: Available on AWS, Azure, GCP, and bare metal providers. Market competition drives prices down; spot instances possible.
- **TPUs**: Exclusively on Google Cloud (TPU VMs). On-demand and reserved pricing. Often more cost-effective for sustained, large-scale training on JAX workloads.

### 5. Scaling Model

- **GPUs scale via NVLink (intra-node) + InfiniBand/RDMA (inter-node)**: More complex network topology, higher latency between nodes.
- **TPUs scale via ICI (uniform all-to-all)**: Simpler topology, very low latency at Pod scale — Google trained Gemini on TPU v4 Pods.

---

## When to Choose Which

**Choose GPUs when:**
- Using PyTorch — the GPU ecosystem is incomparably richer.
- Running research with dynamic shapes, custom ops, or rapid iteration.
- Need flexibility across providers (not locked to Google Cloud).
- Running inference with vLLM, TensorRT-LLM, or similar GPU-native frameworks.

**Choose TPUs when:**
- Using JAX / Flax (Google's preferred stack).
- Training very large models at Pod scale on Google Cloud.
- Running sustained, long training runs where TPU pricing is advantageous.
- Your architecture fits XLA's static-shape requirement well (e.g., fixed sequence length).

---

## Summary

GPUs and TPUs represent two different philosophies: **general-purpose parallelism** vs **specialized matrix acceleration**. For most practitioners, GPUs (especially NVIDIA H100/H200) offer the best combination of ecosystem support, flexibility, and performance. TPUs shine for large-scale training within the Google ecosystem using JAX. As the frontier of LLM training continues to push hardware limits, both continue to evolve — and understanding both gives you full command of the landscape.`,
    zh: `## 什么是 GPU 和 TPU？

训练大型语言模型时，硬件加速器的选择从根本上决定了训练速度、成本和灵活性。两种主流方案是 **GPU（图形处理器）** 和 **TPU（张量处理器）**。

**GPU** 最初为图形渲染设计，但其大规模并行架构使其成为深度学习的理想选择。NVIDIA 在这一领域占主导地位，代表产品为 A100、H100 和 H200 系列。

**TPU** 是 Google 专为矩阵乘法（神经网络训练和推理的核心操作）设计的定制 ASIC（专用集成电路）。

---

## GPU 架构

GPU 包含数千个较小、简单的核心，专为并行执行优化。主要特性：

- **CUDA 核心 / Tensor 核心**：数千个并行处理单元。Tensor 核心专为深度学习关键操作——矩阵乘加（MMA）设计。
- **高带宽内存（HBM）**：H100 最高提供 80GB HBM3，内存带宽约 3.35 TB/s。
- **NVLink / NVSwitch**：NVIDIA 用于节点内多 GPU 通信的高速互联（H100 双向带宽高达 900 GB/s）。
- **CUDA 生态系统**：数十年积累的软件工具——cuDNN、cuBLAS、NCCL——以及对 PyTorch、TensorFlow、JAX 的广泛支持。

### 适用于大模型训练的 NVIDIA GPU 世代

| GPU | 显存 | 带宽 | FP16 TFLOPs | 核心特性 |
|-----|------|------|-------------|---------|
| A100 (80GB) | 80GB HBM2e | 2 TB/s | 312 | MIG 支持 |
| H100 (SXM5) | 80GB HBM3 | 3.35 TB/s | 989 | Transformer Engine, FP8 |
| H200 | 141GB HBM3e | 4.8 TB/s | 989 | 更大显存 |

---

## TPU 架构

TPU 采用完全不同的方式——**脉动阵列**架构，专为矩阵乘法优化。

- **矩阵乘法单元（MXU）**：TPU 的核心，每个周期执行 128×128 矩阵乘法。
- **高带宽内存**：TPU v4 每芯片提供 32GB HBM。
- **芯片间互联（ICI）**：TPU 芯片通过高速光学互联以 3D 环形拓扑连接，支持大规模扩展。
- **TPU Pod**：Google 最大配置可达数千颗芯片组成单一逻辑单元——TPU v4 Pod 有 4096 颗芯片，总带宽 1.2 Pb/s。
- **软件**：主要使用 JAX + XLA 编译器。同时支持 TensorFlow；PyTorch/XLA 提供有限兼容性。

### TPU 世代对比

| TPU | 内存/芯片 | ICI 带宽 | 主要用途 |
|-----|-----------|----------|---------|
| TPU v3 | 16GB HBM | 656 GB/s | 历史遗留 |
| TPU v4 | 32GB HBM | 1.2 Pb/s (Pod) | 大模型训练 |
| TPU v5e | 16GB HBM | 高效推理 | 成本优化 |
| TPU v5p | 95GB HBM | 训练旗舰 | 前沿模型 |

---

## 核心差异

### 1. 灵活性 vs 专一性

GPU 是**通用的**——可以运行任意 CUDA kernel、使用熟悉的工具调试，快速原型新架构。TPU 是**专用的**——XLA 编译强制要求静态形状，快速实验难度较高，但对定义良好的工作负载稳态吞吐更高。

### 2. 软件生态

| 方面 | GPU | TPU |
|------|-----|-----|
| 主要框架 | PyTorch（主导）| JAX / XLA |
| 调试工具 | 成熟（nsight, cuda-gdb）| 有限 |
| 自定义算子 | 容易（CUDA）| 较难（XLA）|
| 社区规模 | 非常大 | 持续增长 |

### 3. 内存容量

对于超大模型，每芯片内存容量至关重要：
- H200 每 GPU 提供 141GB——对大上下文窗口至关重要。
- TPU v5p 每芯片提供 95GB，但 TPU Pod 扩展更无缝。

### 4. 成本与可用性

- **GPU**：可在 AWS、Azure、GCP 和裸金属提供商上获取。市场竞争降低价格；支持竞价实例。
- **TPU**：仅在 Google Cloud（TPU VM）上提供。按需和预留定价。对于使用 JAX 的持续大规模训练通常更具成本效益。

### 5. 扩展模式

- **GPU 通过 NVLink（节点内）+ InfiniBand/RDMA（节点间）扩展**：网络拓扑更复杂，节点间延迟较高。
- **TPU 通过 ICI（均匀全互联）扩展**：拓扑更简单，Pod 规模下延迟极低——Google 使用 TPU v4 Pod 训练了 Gemini。

---

## 如何选择

**选择 GPU 的情形：**
- 使用 PyTorch——GPU 生态系统无可比拟地丰富。
- 进行动态形状、自定义算子或快速迭代的研究。
- 需要跨提供商的灵活性（不锁定 Google Cloud）。
- 使用 vLLM、TensorRT-LLM 或类似 GPU 原生框架进行推理。

**选择 TPU 的情形：**
- 使用 JAX / Flax（Google 首选技术栈）。
- 在 Google Cloud 上进行 Pod 规模的超大模型训练。
- 长期持续训练，TPU 定价更有优势。
- 架构适合 XLA 的静态形状要求（如固定序列长度）。

---

## 总结

GPU 和 TPU 代表了两种不同的理念：**通用并行计算** 与 **专用矩阵加速**。对大多数从业者而言，GPU（尤其是 NVIDIA H100/H200）提供了最佳的生态支持、灵活性和性能组合。TPU 在 Google 生态内使用 JAX 进行大规模训练时表现出色。随着大模型训练持续突破硬件极限，两者都在不断演进——深入理解这两者，让你能够驾驭整个技术格局。`
  }
}

export const mixedPrecision: TopicContent = {
  id: 'mixed-precision',
  title: { en: 'Mixed Precision Training', zh: '混合精度计算' },
  contentType: 'article',
  content: {
    en: `## Why Precision Matters in Training

Neural network training involves storing weights, activations, and gradients — all represented as floating-point numbers. The **precision** of these numbers (how many bits are used) directly affects:
- **Memory usage**: Lower precision = smaller tensors = more data fits in GPU memory.
- **Compute speed**: Modern GPUs/TPUs have specialized hardware that is 2–8x faster for lower-precision operations.
- **Numerical stability**: Higher precision preserves small gradient updates that are critical for convergence.

**Mixed precision training** exploits this trade-off by using low precision for most operations while keeping high precision where it matters.

---

## Floating-Point Formats Explained

### FP32 (Full Precision)
- 1 sign bit + 8 exponent bits + 23 mantissa bits = **32 bits total**
- Standard format for scientific computing
- Large dynamic range, high numerical stability
- Slow on modern ML hardware (most Tensor Cores don't peak here)

### FP16 (Half Precision)
- 1 sign bit + 5 exponent bits + 10 mantissa bits = **16 bits total**
- 2x memory savings vs FP32
- 2–8x faster on Tensor Cores (NVIDIA Volta+)
- **Problem**: Small dynamic range (max ~65504) causes overflow/underflow in training

### BF16 (Brain Float 16)
- 1 sign bit + 8 exponent bits + 7 mantissa bits = **16 bits total**
- Same exponent range as FP32 → **no overflow problem**
- Less mantissa precision than FP16, but sufficient for gradients
- Supported on TPUs, NVIDIA Ampere (A100) and later
- **Preferred format for LLM training today**

### FP8 (Emerging)
- 8 bits total, two variants: E4M3 (precision-focused) and E5M2 (range-focused)
- NVIDIA H100 Transformer Engine supports FP8 natively
- ~2x speedup over FP16/BF16 for matrix multiplications
- Requires careful per-tensor scaling to avoid numerical issues

---

## The Classic AMP (Automatic Mixed Precision) Approach

![AMP training flow: FP16 compute with FP32 master weights](/images/mixed-precision-amp-flow.png)

NVIDIA's AMP (Automatic Mixed Precision) introduced the standard workflow for FP16/BF16 training:

### 1. Maintain FP32 Master Weights

Weights are stored in FP32 (the "master copy"). Before each forward pass, they are **cast down to FP16/BF16** for computation. Gradients computed in FP16/BF16 are cast back to FP32 for the weight update.

\`\`\`
FP32 weights → cast to FP16 → forward pass → compute FP16 gradients
→ cast gradients back to FP32 → update FP32 master weights
\`\`\`

This preserves numerical precision in weight updates while getting the speed benefits of low-precision compute.

### 2. Loss Scaling (for FP16 only)

FP16's small dynamic range causes **gradient underflow** — tiny gradients round to zero before the weight update. The solution:

1. **Scale the loss** by a large factor (e.g., 2^16) before backpropagation.
2. This shifts gradients into FP16's representable range.
3. **Unscale gradients** before the optimizer step.
4. Check for inf/NaN; if found, skip the update and reduce the scale factor.

\`\`\`python
# PyTorch AMP example
scaler = torch.cuda.amp.GradScaler()

with torch.autocast(device_type='cuda', dtype=torch.float16):
    output = model(input)
    loss = criterion(output, target)

scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()
\`\`\`

**BF16 doesn't need loss scaling** (same exponent range as FP32), which makes it simpler to use.

---

## BF16 Training (Modern LLMs)

All major recent LLMs (LLaMA, Mistral, DeepSeek, etc.) train in **BF16**:

\`\`\`python
# Simple BF16 training with PyTorch
with torch.autocast(device_type='cuda', dtype=torch.bfloat16):
    output = model(input)
    loss = criterion(output, target)

loss.backward()
optimizer.step()
\`\`\`

No GradScaler needed. Master weights in FP32 (or BF16 if memory is tight). Typical memory savings: **~50% vs pure FP32**.

---

## FP8 Training (Cutting Edge)

NVIDIA H100's Transformer Engine enables FP8 precision for matrix multiplications:

- **Forward pass**: FP8 (E4M3) — high precision for activations
- **Backward pass**: FP8 (E5M2) — higher range for gradients
- **Accumulation**: FP32 — preserves precision for weight updates
- **Scaling**: Per-tensor or per-channel dynamic scaling factors

FP8 is still emerging — most production training uses BF16. But for frontier models (GPT-4 class), FP8 can deliver significant throughput gains.

---

## Memory Layout in Mixed Precision Training

For a model with N parameters:

| Component | Precision | Memory (N=7B params) |
|-----------|-----------|----------------------|
| Weights (FP32 master) | FP32 | ~26 GB |
| Weights (BF16 copy) | BF16 | ~13 GB |
| Gradients (FP32) | FP32 | ~26 GB |
| Optimizer state (Adam: momentum + variance) | FP32 | ~52 GB |
| **Total** | | **~117 GB** |

This is why 7B models require multiple high-memory GPUs even with BF16 training. ZeRO sharding (covered later) distributes these across GPUs.

---

## Key Takeaways

1. **BF16 is the default** for modern LLM training — no loss scaling needed, same range as FP32, 2x memory savings.
2. **FP16 needs GradScaler** — required for numerical stability, slightly more complex setup.
3. **FP32 master weights** remain the "source of truth" for weight updates in both cases.
4. **FP8 is the frontier** — H100 Transformer Engine enables it, but requires careful implementation.
5. **AMP autocast** in PyTorch/JAX handles the casting automatically — you rarely need to do it manually.

Mixed precision is no longer optional for LLM training — it is the baseline that all serious training runs start from.`,
    zh: `## 为什么精度在训练中很重要？

神经网络训练涉及存储权重、激活值和梯度——这些都以浮点数表示。这些数字的**精度**（使用多少位）直接影响：
- **内存使用**：精度越低 → 张量越小 → GPU 显存能放更多数据。
- **计算速度**：现代 GPU/TPU 拥有专为低精度运算优化的硬件，速度可提升 2–8 倍。
- **数值稳定性**：更高的精度能保留细微的梯度更新，这对收敛至关重要。

**混合精度训练**正是利用了这一权衡——在大多数操作中使用低精度，在关键位置保留高精度。

---

## 浮点格式详解

### FP32（全精度）
- 1 位符号 + 8 位指数 + 23 位尾数 = **共 32 位**
- 科学计算的标准格式
- 动态范围大，数值稳定性高
- 在现代 ML 硬件上速度较慢（大多数 Tensor Core 不在此处达到峰值）

### FP16（半精度）
- 1 位符号 + 5 位指数 + 10 位尾数 = **共 16 位**
- 相比 FP32 节省 2 倍内存
- 在 Tensor Core 上快 2–8 倍（NVIDIA Volta 及以后）
- **问题**：动态范围小（最大约 65504），训练时容易溢出或下溢

### BF16（Brain Float 16）
- 1 位符号 + 8 位指数 + 7 位尾数 = **共 16 位**
- 指数范围与 FP32 相同 → **没有溢出问题**
- 尾数精度低于 FP16，但对梯度计算已足够
- TPU、NVIDIA Ampere（A100）及以后版本支持
- **当前大模型训练的首选格式**

### FP8（新兴格式）
- 共 8 位，两种变体：E4M3（精度优先）和 E5M2（范围优先）
- NVIDIA H100 Transformer Engine 原生支持 FP8
- 与 FP16/BF16 相比，矩阵乘法约提速 2 倍
- 需要精心设计的逐张量缩放以避免数值问题

---

## 经典 AMP（自动混合精度）方案

![AMP 训练流程：FP16 计算配合 FP32 主权重](/images/mixed-precision-amp-flow.png)

NVIDIA 的 AMP 引入了 FP16/BF16 训练的标准工作流：

### 1. 维护 FP32 主权重

权重以 FP32 存储（"主副本"）。每次前向传播前，**降精度转为 FP16/BF16** 进行计算。以 FP16/BF16 计算的梯度再转回 FP32 用于权重更新。

\`\`\`
FP32 权重 → 转换为 FP16 → 前向传播 → 计算 FP16 梯度
→ 梯度转回 FP32 → 更新 FP32 主权重
\`\`\`

这在享受低精度计算带来速度提升的同时，保留了权重更新的数值精度。

### 2. 损失缩放（仅 FP16 需要）

FP16 的小动态范围会导致**梯度下溢**——细微的梯度在权重更新前就被舍入为零。解决方案：

1. 在反向传播前将**损失乘以一个大倍数**（如 2^16）。
2. 将梯度移入 FP16 可表示的范围。
3. 优化器步骤前**取消缩放梯度**。
4. 检查 inf/NaN；若发现，跳过此次更新并降低缩放系数。

\`\`\`python
# PyTorch AMP 示例
scaler = torch.cuda.amp.GradScaler()

with torch.autocast(device_type='cuda', dtype=torch.float16):
    output = model(input)
    loss = criterion(output, target)

scaler.scale(loss).backward()
scaler.step(optimizer)
scaler.update()
\`\`\`

**BF16 不需要损失缩放**（与 FP32 相同的指数范围），使用起来更简单。

---

## BF16 训练（现代大模型）

所有主流大模型（LLaMA、Mistral、DeepSeek 等）均使用 **BF16** 训练：

\`\`\`python
# PyTorch 简单的 BF16 训练
with torch.autocast(device_type='cuda', dtype=torch.bfloat16):
    output = model(input)
    loss = criterion(output, target)

loss.backward()
optimizer.step()
\`\`\`

无需 GradScaler。主权重以 FP32 存储（如果内存紧张也可用 BF16）。典型内存节省：**相比纯 FP32 约 50%**。

---

## FP8 训练（前沿技术）

NVIDIA H100 的 Transformer Engine 支持矩阵乘法使用 FP8 精度：

- **前向传播**：FP8 (E4M3) —— 高精度用于激活值
- **反向传播**：FP8 (E5M2) —— 更大范围用于梯度
- **累加**：FP32 —— 保留权重更新的精度
- **缩放**：逐张量或逐通道动态缩放系数

FP8 仍在普及中——大多数生产训练使用 BF16。但对于前沿模型（GPT-4 级别），FP8 可带来显著的吞吐量提升。

---

## 混合精度训练的内存分布

对于参数量为 N 的模型：

| 组件 | 精度 | 内存（N=7B）|
|------|------|------------|
| 权重（FP32 主副本）| FP32 | ~26 GB |
| 权重（BF16 副本）| BF16 | ~13 GB |
| 梯度（FP32）| FP32 | ~26 GB |
| 优化器状态（Adam：动量 + 方差）| FP32 | ~52 GB |
| **总计** | | **~117 GB** |

这就是为什么即使使用 BF16 训练，7B 模型也需要多块高显存 GPU 的原因。ZeRO 分片（后续介绍）可将这些分散到多个 GPU 上。

---

## 核心要点

1. **BF16 是现代大模型训练的默认选择**——无需损失缩放，与 FP32 相同的动态范围，节省 2 倍内存。
2. **FP16 需要 GradScaler**——数值稳定性必需，设置稍复杂。
3. **FP32 主权重**始终是权重更新的"权威来源"。
4. **FP8 是前沿方向**——H100 Transformer Engine 支持，但需要精心实现。
5. **PyTorch/JAX 的 AMP autocast** 自动处理精度转换——几乎不需要手动管理。

混合精度训练对于大模型训练已不再是可选项——它是所有严肃训练任务的起点。`
  }
}

export const parallelTraining: TopicContent = {
  id: 'parallel-training',
  title: { en: 'Data / Model / Hybrid Parallelism', zh: '数据并行VS模型并行VS混合并行' },
  contentType: 'article',
  content: {
    en: `## The Core Problem: One Model, Many GPUs

Training a large language model requires far more memory and compute than a single GPU can provide. The fundamental challenge is: **how do you distribute the work across hundreds or thousands of GPUs efficiently?**

Three core parallelism strategies address this:
1. **Data Parallelism (DP)**: Same model, different data
2. **Model Parallelism (MP)**: Different parts of the model, same data
3. **Hybrid Parallelism**: Combining both

---

## Data Parallelism (DP)

![Data Parallel — same model replicated, different data per GPU](/images/parallel-data-parallel.png)

### How It Works

Every GPU holds a **complete copy of the model**. The training data is split into micro-batches, each GPU processes its own batch independently, then gradients are **synchronized (averaged) across all GPUs** before the weight update.

\`\`\`
GPU 0: [Model copy] ← Batch A → computes gradients
GPU 1: [Model copy] ← Batch B → computes gradients
GPU 2: [Model copy] ← Batch C → computes gradients
GPU 3: [Model copy] ← Batch D → computes gradients
           ↓
    AllReduce: average all gradients
           ↓
    Each GPU updates its weights identically
\`\`\`

### Gradient Synchronization: AllReduce

The critical operation is **AllReduce** — every GPU sends its gradients and receives the averaged result. Two common algorithms:

- **Ring-AllReduce**: Gradients circulate around a ring of GPUs. Bandwidth cost: 2(N-1)/N × gradient_size (nearly 100% efficient). This is NCCL's default.
- **Tree-AllReduce**: Reduction across a binary tree. Less common in practice.

### Pros and Cons

**Pros:**
- Simple to implement (PyTorch DDP is ~3 lines of code)
- Linear scaling: 8 GPUs → ~8x throughput
- Works well when model fits in one GPU's memory

**Cons:**
- Each GPU must hold the **full model** — doesn't help if model is too large for one GPU
- Gradient synchronization adds communication overhead
- For very large batch sizes, gradient compression may be needed

### When to Use DP

Model fits in single GPU memory (e.g., 7B model on H100 80GB). Effective batch size needs scaling across many GPUs.

---

## Model Parallelism (MP)

![Model Parallel — model layers split across GPUs](/images/parallel-model-parallel.png)

When a model is too large for a single GPU, it must be **split across GPUs**. Two main flavors:

### Tensor Parallelism (Intra-layer)

Individual layers (especially large linear layers) are **split within a layer** across GPUs. Each GPU computes part of the matrix multiplication and results are combined.

Example — splitting a Linear layer across 4 GPUs:
\`\`\`
Weight W (d_model × d_ffn) split column-wise:
GPU 0: W[:, 0:d_ffn/4]  →  partial output
GPU 1: W[:, d_ffn/4:d_ffn/2]  →  partial output
GPU 2: W[:, d_ffn/2:3*d_ffn/4]  →  partial output
GPU 3: W[:, 3*d_ffn/4:]  →  partial output
→ AllGather → full output on all GPUs
\`\`\`

**Pros:** Reduces memory per GPU linearly with tensor parallel degree.
**Cons:** Requires very fast inter-GPU communication (NVLink preferred). Communication happens **every layer** — high bandwidth demand.

Tensor parallelism works best **within a single node** (NVLink bandwidth: ~900 GB/s).

### Pipeline Parallelism (Inter-layer)

The model is split by **layers** across GPUs. GPU 0 holds layers 1–8, GPU 1 holds layers 9–16, etc.

\`\`\`
GPU 0: [Layers 1-8]  →  activations sent to GPU 1
GPU 1: [Layers 9-16]  →  activations sent to GPU 2
GPU 2: [Layers 17-24]  →  activations sent to GPU 3
GPU 3: [Layers 25-32]  →  loss computed here
\`\`\`

**The Pipeline Bubble Problem:** In the naive scheme, most GPUs sit idle while one GPU computes (the "bubble").

**Solution — Micro-batching:** Split each batch into micro-batches. While GPU 1 processes micro-batch 2, GPU 0 starts on micro-batch 3. This fills the pipeline and reduces idle time.

**GPipe** and **PipeDream** are two key algorithms that manage this scheduling.

**Pros:** Works across nodes (lower bandwidth required vs tensor parallelism).
**Cons:** Pipeline bubble still wastes some compute. Activation checkpointing often needed.

---

## Hybrid Parallelism: 3D Parallelism

![Hybrid Parallel — combining data and model parallelism](/images/parallel-hybrid.png)

For frontier-scale models, **all three strategies are combined**:

- **Data Parallelism**: Replicate the entire pipeline across multiple sets of GPUs
- **Pipeline Parallelism**: Split layers across nodes
- **Tensor Parallelism**: Split individual tensors within nodes

The canonical example is **Megatron-LM's 3D Parallelism**:

\`\`\`
Example: 32 GPUs in a 4 (DP) × 4 (PP) × 2 (TP) configuration

Tensor parallel within node (fast NVLink):  2 GPUs per PP stage
Pipeline parallel across nodes:             4 pipeline stages
Data parallel across full pipelines:        4 complete replicas
\`\`\`

This configuration trained GPT-3 175B and larger models.

### Choosing Parallel Dimensions

| Model Size | Strategy | Why |
|------------|----------|-----|
| ≤ 7B | Data Parallel only | Model fits in 1 GPU; simplest |
| 7B–70B | DP + optional TP | Needs memory sharding |
| 70B–500B | DP + PP + TP (3D) | Requires full 3D parallelism |
| 500B+ | 3D + ZeRO | All strategies + optimizer sharding |

---

## Communication Patterns Comparison

| Strategy | Communication Type | Frequency | Bandwidth Needed |
|----------|-------------------|-----------|-----------------|
| Data Parallel | AllReduce (gradients) | Once per step | High (training) |
| Tensor Parallel | AllReduce / AllGather | Every layer | Very high (NVLink) |
| Pipeline Parallel | P2P (activations) | Every micro-batch | Medium |

---

## Summary

- **Data Parallelism**: Easiest, scales throughput, but every GPU needs the full model.
- **Tensor Parallelism**: Splits layers within GPUs, needs NVLink-class bandwidth, reduces memory per GPU.
- **Pipeline Parallelism**: Splits layers across nodes, lower bandwidth requirement, introduces pipeline bubble.
- **3D Hybrid Parallelism**: Combines all three for training models at any scale.

Understanding these strategies is foundational to configuring distributed training for any LLM workload.`,
    zh: `## 核心问题：一个模型，多块 GPU

训练大语言模型所需的内存和算力远超单块 GPU 的能力范围。核心挑战是：**如何在数百甚至数千块 GPU 上高效分配计算任务？**

三种核心并行策略应对这一挑战：
1. **数据并行（DP）**：相同模型，不同数据
2. **模型并行（MP）**：模型的不同部分，相同数据
3. **混合并行**：结合以上两种方式

---

## 数据并行（DP）

![数据并行——每块 GPU 有完整模型副本，处理不同数据](/images/parallel-data-parallel.png)

### 工作原理

每块 GPU 持有**完整的模型副本**。训练数据被切分为微批次，每块 GPU 独立处理各自的批次，然后在权重更新前**跨所有 GPU 同步（求平均）梯度**。

\`\`\`
GPU 0: [模型副本] ← 批次 A → 计算梯度
GPU 1: [模型副本] ← 批次 B → 计算梯度
GPU 2: [模型副本] ← 批次 C → 计算梯度
GPU 3: [模型副本] ← 批次 D → 计算梯度
           ↓
    AllReduce：对所有梯度求平均
           ↓
    每块 GPU 以相同方式更新权重
\`\`\`

### 梯度同步：AllReduce

关键操作是 **AllReduce**——每块 GPU 发送自己的梯度并接收平均结果。两种常见算法：

- **Ring-AllReduce**：梯度沿 GPU 环形传递。带宽成本：2(N-1)/N × 梯度大小（效率接近 100%）。这是 NCCL 的默认方式。
- **Tree-AllReduce**：基于二叉树的归约。实践中较少使用。

### 优缺点

**优点：**
- 实现简单（PyTorch DDP 约 3 行代码）
- 线性扩展：8 块 GPU → 约 8 倍吞吐量
- 模型能放入单块 GPU 时效果好

**缺点：**
- 每块 GPU 必须持有**完整模型**——如果模型超过单 GPU 显存则无法使用
- 梯度同步带来通信开销
- 超大批次时可能需要梯度压缩

### 适用场景

模型能放入单块 GPU 显存（如 7B 模型在 H100 80GB 上）。需要通过多 GPU 扩大有效批量大小。

---

## 模型并行（MP）

![模型并行——模型各层分布在不同 GPU 上](/images/parallel-model-parallel.png)

当模型超过单块 GPU 的容量时，必须将其**拆分到多块 GPU 上**。主要有两种方式：

### 张量并行（层内分割）

单个层（尤其是大型线性层）被**在层内跨 GPU 切分**。每块 GPU 计算矩阵乘法的一部分，然后合并结果。

示例——将一个 Linear 层分到 4 块 GPU：
\`\`\`
权重 W (d_model × d_ffn) 按列切分：
GPU 0: W[:, 0:d_ffn/4]  →  部分输出
GPU 1: W[:, d_ffn/4:d_ffn/2]  →  部分输出
GPU 2: W[:, d_ffn/2:3*d_ffn/4]  →  部分输出
GPU 3: W[:, 3*d_ffn/4:]  →  部分输出
→ AllGather → 所有 GPU 得到完整输出
\`\`\`

**优点：** 每块 GPU 的内存随张量并行度线性降低。
**缺点：** 需要极快的 GPU 间通信（推荐 NVLink）。通信在**每一层**都发生——对带宽需求极高。

张量并行最适合在**单节点内**使用（NVLink 带宽：约 900 GB/s）。

### 流水线并行（层间分割）

模型按**层**分配到各 GPU。GPU 0 持有第 1–8 层，GPU 1 持有第 9–16 层，以此类推。

\`\`\`
GPU 0: [第 1-8 层]  →  激活值发送给 GPU 1
GPU 1: [第 9-16 层]  →  激活值发送给 GPU 2
GPU 2: [第 17-24 层]  →  激活值发送给 GPU 3
GPU 3: [第 25-32 层]  →  在此计算损失
\`\`\`

**流水线气泡问题：** 在朴素方案中，大多数 GPU 在等待某块 GPU 计算时处于空闲状态（"气泡"）。

**解决方案——微批次：** 将每个批次切分为微批次。GPU 1 处理微批次 2 的同时，GPU 0 开始处理微批次 3。这样填满流水线，减少空闲时间。

**GPipe** 和 **PipeDream** 是管理这种调度的两种关键算法。

**优点：** 可跨节点使用（所需带宽低于张量并行）。
**缺点：** 流水线气泡仍会浪费一些算力。通常需要激活值重计算。

---

## 混合并行：3D 并行

![混合并行——结合数据并行与模型并行](/images/parallel-hybrid.png)

对于前沿规模的模型，**三种策略组合使用**：

- **数据并行**：在多组 GPU 上复制整个流水线
- **流水线并行**：跨节点切分层
- **张量并行**：在节点内切分单个张量

典型案例是 **Megatron-LM 的 3D 并行**：

\`\`\`
示例：32 块 GPU，配置为 4（DP）× 4（PP）× 2（TP）

节点内张量并行（高速 NVLink）：每个 PP 阶段 2 块 GPU
跨节点流水线并行：4 个流水线阶段
跨完整流水线数据并行：4 个完整副本
\`\`\`

这种配置用于训练 GPT-3 175B 及更大的模型。

### 选择并行维度

| 模型规模 | 策略 | 原因 |
|----------|------|------|
| ≤ 7B | 仅数据并行 | 模型能放入 1 块 GPU；最简单 |
| 7B–70B | DP + 可选 TP | 需要内存分片 |
| 70B–500B | DP + PP + TP（3D）| 需要完整 3D 并行 |
| 500B+ | 3D + ZeRO | 全部策略 + 优化器分片 |

---

## 通信模式对比

| 策略 | 通信类型 | 频率 | 所需带宽 |
|------|---------|------|---------|
| 数据并行 | AllReduce（梯度）| 每步一次 | 高（训练时）|
| 张量并行 | AllReduce / AllGather | 每层都有 | 极高（NVLink）|
| 流水线并行 | P2P（激活值）| 每个微批次 | 中等 |

---

## 总结

- **数据并行**：最简单，扩展吞吐量，但每块 GPU 需要完整模型。
- **张量并行**：层内跨 GPU 切分，需要 NVLink 级别带宽，每块 GPU 内存降低。
- **流水线并行**：层间跨节点切分，带宽需求较低，引入流水线气泡。
- **3D 混合并行**：三者结合，可训练任意规模的大模型。

理解这些策略是配置任何大模型分布式训练工作负载的基础。`
  }
}

export const distributedPrinciples: TopicContent = {
  id: 'distributed-principles',
  title: { en: 'Distributed Training Principles & Architecture', zh: '分布式训练原理与基础架构' },
  contentType: 'article',
  content: {
    en: `## Why Distributed Training?

A single NVIDIA H100 GPU delivers ~989 TFLOPS (FP16). Training GPT-3 (175B parameters) required approximately 3.14 × 10²³ FLOPs. Even at 100% efficiency on one H100, that would take **~10 years**. In practice, GPT-3 was trained on thousands of A100s in about a month.

Distributed training is not an optimization — it is a **necessity** at LLM scale.

---

## The Two Fundamental Resources to Distribute

### 1. Compute (FLOPs)

Every layer of a transformer requires matrix multiplications. These are massively parallelizable — the core insight of modern deep learning hardware. Distributing compute means assigning subsets of the work to different devices.

### 2. Memory

Memory is the harder constraint. For a model with N parameters, full training requires storing:
- **Weights**: 2N bytes (BF16) or 4N bytes (FP32)
- **Gradients**: Same as weights
- **Optimizer states**: 8N bytes (Adam: momentum + variance in FP32)
- **Activations**: Varies with batch size and sequence length

For a 70B parameter model, just weights + optimizer states ≈ **840 GB** — far beyond any single GPU.

---

## Fundamental Distributed Computing Concepts

### Process Groups

In distributed training, each GPU runs a **process**. A **process group** is a collection of processes that can communicate with each other.

- **World size**: Total number of processes (GPUs)
- **Rank**: Unique ID of each process (0 to world_size - 1)
- **Local rank**: GPU index within a single node

\`\`\`python
# PyTorch distributed init
import torch.distributed as dist

dist.init_process_group(backend='nccl')  # NCCL for GPU-GPU communication
rank = dist.get_rank()
world_size = dist.get_world_size()
\`\`\`

### Communication Backends

| Backend | Transport | Best For |
|---------|-----------|---------|
| NCCL | CUDA-aware, NVLink/IB | GPU-GPU (standard choice) |
| Gloo | CPU | CPU fallback, debugging |
| MPI | Various | HPC clusters |

NCCL (NVIDIA Collective Communications Library) is the standard for GPU training. It automatically selects the fastest path: NVLink for intra-node, InfiniBand/RoCE for inter-node.

---

## Collective Communication Operations

![AllReduce: each process contributes, all receive the combined result](/images/dist-allreduce.png)

These are the building blocks of all distributed training algorithms:

### AllReduce
Every process sends its tensor, and all receive the **same aggregated result** (sum, mean, max, etc.).
- Used for: gradient synchronization in data parallel training
- Cost: 2(N-1)/N × data_size per process (Ring-AllReduce)

### Broadcast
One process (root) sends its tensor to **all other processes**.
- Used for: synchronizing initial weights, sending config

### AllGather
Every process sends its tensor, and all receive the **concatenation of all tensors**.
- Used for: tensor parallelism (gather partial results)
- Cost: (N-1)/N × data_size per process

### ReduceScatter
Every process sends its tensor; the sum is computed and **each process receives a different slice of the result**.
- Used for: ZeRO-3 gradient sharding
- Cost: (N-1)/N × data_size per process

### Point-to-Point (P2P)
One process sends to one specific process. Used in pipeline parallelism to pass activations.

---

## Network Topology for LLM Training

### Intra-Node (Within a Server)

![NVLink + PCIe topology within and between nodes](/images/dist-nvlink-topology.png)

Modern GPU servers (DGX H100) connect 8 GPUs via **NVLink** — a proprietary high-speed interconnect:
- H100 NVLink bandwidth: 900 GB/s bidirectional
- All-to-all communication, no CPU involvement
- Ideal for tensor parallelism (frequent, high-bandwidth ops)

### Inter-Node (Between Servers)

Nodes are connected via **InfiniBand (IB)** or **RoCE (RDMA over Converged Ethernet)**:
- HDR InfiniBand: 200 Gb/s per port (~25 GB/s)
- NDR InfiniBand: 400 Gb/s per port (~50 GB/s)
- Latency: ~1–5 μs (much higher than NVLink)

This is why pipeline and data parallel communication (lower bandwidth, less frequent) are done inter-node, while tensor parallelism stays intra-node.

### Fat-Tree and Dragonfly Topologies

At data center scale, switches organize servers into topologies:
- **Fat-tree**: Full bisection bandwidth, expensive but optimal for all-to-all traffic
- **Dragonfly**: Lower cost, good for collective operations at cluster scale

---

## The Training Loop: Distributed Perspective

A single training step across multiple GPUs:

\`\`\`
1. [Data loading]    Each GPU fetches its micro-batch
2. [Forward pass]    Each GPU computes activations
                     (+ P2P if pipeline parallel)
3. [Loss computation] Each GPU (or last stage) computes loss
4. [Backward pass]   Each GPU computes gradients
                     (+ P2P for pipeline, AllReduce for TP)
5. [Gradient sync]   AllReduce across data parallel replicas
6. [Optimizer step]  Each GPU updates its weights
7. [Repeat]
\`\`\`

Overlap between computation and communication is critical — modern frameworks (Megatron, DeepSpeed) pipeline gradient communication with backward computation to hide latency.

---

## Key Metrics

- **MFU (Model FLOPs Utilization)**: Actual FLOPs / theoretical peak FLOPs. Good LLM training achieves 35–55% MFU.
- **HFU (Hardware FLOPs Utilization)**: Accounts for rematerialization overhead. Always ≤ MFU.
- **Throughput (tokens/sec/GPU)**: The practical measure of training efficiency.

A training run's efficiency depends on minimizing communication overhead while maximizing GPU utilization — the central engineering challenge of distributed LLM training.`,
    zh: `## 为什么需要分布式训练？

单块 NVIDIA H100 GPU 的算力约为 989 TFLOPS（FP16）。训练 GPT-3（1750 亿参数）大约需要 3.14 × 10²³ 次浮点运算。即使在单块 H100 上达到 100% 效率，也需要大约**10 年**。实际上，GPT-3 在数千块 A100 上训练了约一个月。

分布式训练并非优化手段——在大模型规模下，它是**不可或缺的必需品**。

---

## 需要分配的两种基本资源

### 1. 算力（FLOPs）

Transformer 的每一层都需要矩阵乘法。这些运算具有极高的并行性——这是现代深度学习硬件的核心洞见。分配算力意味着将工作的子集分配给不同的设备。

### 2. 内存

内存是更难突破的瓶颈。对于参数量为 N 的模型，完整训练需要存储：
- **权重**：2N 字节（BF16）或 4N 字节（FP32）
- **梯度**：与权重相同
- **优化器状态**：8N 字节（Adam：FP32 的动量 + 方差）
- **激活值**：随批量大小和序列长度变化

对于 700 亿参数模型，仅权重 + 优化器状态 ≈ **840 GB**——远超任何单块 GPU 的容量。

---

## 分布式计算的基本概念

### 进程组

在分布式训练中，每块 GPU 运行一个**进程**。**进程组**是一组可以互相通信的进程集合。

- **World size**：进程（GPU）总数
- **Rank**：每个进程的唯一 ID（0 到 world_size - 1）
- **Local rank**：单个节点内的 GPU 索引

\`\`\`python
# PyTorch 分布式初始化
import torch.distributed as dist

dist.init_process_group(backend='nccl')  # NCCL 用于 GPU-GPU 通信
rank = dist.get_rank()
world_size = dist.get_world_size()
\`\`\`

### 通信后端

| 后端 | 传输层 | 最适合 |
|------|--------|--------|
| NCCL | CUDA-aware, NVLink/IB | GPU-GPU（标准选择）|
| Gloo | CPU | CPU 回退、调试 |
| MPI | 多种 | HPC 集群 |

NCCL（NVIDIA 集体通信库）是 GPU 训练的标准。它自动选择最快路径：节点内走 NVLink，节点间走 InfiniBand/RoCE。

---

## 集体通信操作

![AllReduce：每个进程贡献梯度，所有进程收到合并结果](/images/dist-allreduce.png)

这些是所有分布式训练算法的基本构建块：

### AllReduce
每个进程发送自己的张量，所有进程收到**相同的聚合结果**（求和、求均值、取最大值等）。
- 用途：数据并行训练中的梯度同步
- 成本：每个进程 2(N-1)/N × 数据大小（Ring-AllReduce）

### Broadcast
一个进程（根节点）将其张量发送给**所有其他进程**。
- 用途：同步初始权重、发送配置信息

### AllGather
每个进程发送自己的张量，所有进程收到**所有张量的拼接**。
- 用途：张量并行（汇聚部分结果）
- 成本：每个进程 (N-1)/N × 数据大小

### ReduceScatter
每个进程发送自己的张量；计算总和后**每个进程收到结果的不同切片**。
- 用途：ZeRO-3 梯度分片
- 成本：每个进程 (N-1)/N × 数据大小

### 点对点（P2P）
一个进程向特定的另一个进程发送数据。用于流水线并行中传递激活值。

---

## 大模型训练的网络拓扑

### 节点内（服务器内部）

![NVLink 与 PCIe 节点内/节点间拓扑结构](/images/dist-nvlink-topology.png)

现代 GPU 服务器（DGX H100）通过 **NVLink** 连接 8 块 GPU——这是 NVIDIA 的专有高速互联：
- H100 NVLink 带宽：双向 900 GB/s
- 全互联，无需 CPU 参与
- 最适合张量并行（频繁的高带宽操作）

### 节点间（服务器之间）

节点通过 **InfiniBand（IB）** 或 **RoCE（基于融合以太网的 RDMA）** 连接：
- HDR InfiniBand：每端口 200 Gb/s（约 25 GB/s）
- NDR InfiniBand：每端口 400 Gb/s（约 50 GB/s）
- 延迟：约 1–5 μs（远高于 NVLink）

这就是为什么流水线并行和数据并行（带宽需求低、频率较低）在节点间进行，而张量并行保留在节点内。

### Fat-Tree 和 Dragonfly 拓扑

在数据中心规模，交换机将服务器组织成特定拓扑：
- **Fat-tree**：完整的对分带宽，成本较高，但对全互联流量最优
- **Dragonfly**：成本更低，适合集群规模的集体通信操作

---

## 训练循环：分布式视角

多块 GPU 上的单步训练流程：

\`\`\`
1. [数据加载]      每块 GPU 获取其微批次
2. [前向传播]      每块 GPU 计算激活值
                   （+ 流水线并行时的 P2P 通信）
3. [损失计算]      每块 GPU（或最后阶段）计算损失
4. [反向传播]      每块 GPU 计算梯度
                   （+ 张量并行时的 P2P 和 AllReduce）
5. [梯度同步]      数据并行副本之间的 AllReduce
6. [优化器步骤]    每块 GPU 更新自己的权重
7. [重复]
\`\`\`

计算与通信的重叠至关重要——Megatron、DeepSpeed 等现代框架将梯度通信与反向传播计算流水线化，以隐藏延迟。

---

## 关键指标

- **MFU（模型 FLOPs 利用率）**：实际 FLOPs / 理论峰值 FLOPs。优秀的大模型训练可达 35–55% MFU。
- **HFU（硬件 FLOPs 利用率）**：考虑重计算开销后的利用率。始终 ≤ MFU。
- **吞吐量（tokens/秒/GPU）**：训练效率的实际衡量指标。

训练任务的效率取决于在最大化 GPU 利用率的同时最小化通信开销——这是分布式大模型训练的核心工程挑战。`
  }
}

export const dataParallelPractice: TopicContent = {
  id: 'data-parallel-practice',
  title: { en: 'Data Parallel Training in Practice', zh: '数据并行训练实践' },
  contentType: 'article',
  content: {
    en: `## From Theory to Code

![DDP overview: each rank gets different data, same model, gradients are AllReduced](/images/ddp-overview.png)

Data parallelism is the first tool every distributed training practitioner learns. This article covers the practical implementation from PyTorch's basic DP to the production-ready DDP, along with the critical engineering details that determine real-world performance.

---

## PyTorch DataParallel (DP) — The Naive Approach

PyTorch's original \`nn.DataParallel\` is simple but inefficient:

\`\`\`python
import torch
import torch.nn as nn

model = MyModel().cuda()
model = nn.DataParallel(model, device_ids=[0, 1, 2, 3])

# Training loop
for batch in dataloader:
    inputs, labels = batch
    inputs = inputs.cuda()  # Data goes to GPU 0
    outputs = model(inputs)  # Internally split and distributed
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()
\`\`\`

### Why DP is Slow

1. **Python GIL bottleneck**: All forward passes are dispatched from one Python thread.
2. **GPU 0 is the bottleneck**: Scatter (input distribution) and Gather (output collection) all happen on GPU 0, causing memory imbalance.
3. **No gradient communication overlap**: Gradients are only synchronized after all backward passes complete.
4. **Single process**: Can't bypass GIL — only one CPU core is utilized.

**DP is deprecated for serious training.** Use DDP instead.

---

## DistributedDataParallel (DDP) — The Standard

DDP uses **one process per GPU**, bypasses the GIL, and overlaps gradient communication with backward computation.

### Setup: Launch with torchrun

\`\`\`bash
# Launch 4 processes on 1 node (4 GPUs)
torchrun --nproc_per_node=4 train.py

# Multi-node: 2 nodes, 4 GPUs each = 8 total
torchrun --nnodes=2 --nproc_per_node=4 \\
  --rdzv_id=100 --rdzv_backend=c10d \\
  --rdzv_endpoint=master_addr:29400 \\
  train.py
\`\`\`

### Training Script with DDP

\`\`\`python
import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP
from torch.utils.data.distributed import DistributedSampler

def setup():
    dist.init_process_group(backend='nccl')
    torch.cuda.set_device(int(os.environ['LOCAL_RANK']))

def cleanup():
    dist.destroy_process_group()

def train():
    setup()
    rank = dist.get_rank()
    local_rank = int(os.environ['LOCAL_RANK'])
    world_size = dist.get_world_size()

    # Model setup
    model = MyModel().to(local_rank)
    model = DDP(model, device_ids=[local_rank])

    # Dataset with DistributedSampler
    dataset = MyDataset()
    sampler = DistributedSampler(dataset, num_replicas=world_size, rank=rank)
    dataloader = DataLoader(dataset, batch_size=32, sampler=sampler)

    optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)

    for epoch in range(num_epochs):
        sampler.set_epoch(epoch)  # Critical: ensures different shuffling per epoch
        for batch in dataloader:
            inputs, labels = batch
            inputs = inputs.to(local_rank)
            labels = labels.to(local_rank)

            with torch.autocast(device_type='cuda', dtype=torch.bfloat16):
                outputs = model(inputs)
                loss = criterion(outputs, labels)

            loss.backward()
            optimizer.step()
            optimizer.zero_grad()

    cleanup()

if __name__ == '__main__':
    train()
\`\`\`

### How DDP Works Under the Hood

![DDP 5-step process: data load → forward → loss → backward+AllReduce → weight update](/images/ddp-steps.png)

1. **Forward pass**: Each GPU independently processes its mini-batch.
2. **Backward pass**: As gradients are computed layer by layer (LIFO order), DDP hooks trigger **AllReduce** on each parameter's gradient **as soon as it's ready** — overlapping with the backward pass of earlier layers.
3. **Optimizer step**: Each GPU applies the same (synchronized) gradients to update weights. Since all GPUs start with the same weights and receive the same gradients, they remain in sync without explicitly copying weights.

This overlap is why DDP is **significantly faster** than DP.

---

## Critical Practical Details

### 1. DistributedSampler and set_epoch()

\`\`\`python
sampler = DistributedSampler(dataset, shuffle=True)
# MUST call this every epoch to get different shuffles
sampler.set_epoch(epoch)
\`\`\`

Without \`set_epoch()\`, every epoch uses the same data order — effectively reducing diversity.

### 2. Gradient Accumulation with DDP

When using gradient accumulation (simulate larger batch sizes), only sync gradients on the final accumulation step:

\`\`\`python
accumulation_steps = 4

for i, batch in enumerate(dataloader):
    # Don't sync gradients on intermediate steps
    with model.no_sync() if (i + 1) % accumulation_steps != 0 else contextlib.nullcontext():
        loss = model(batch) / accumulation_steps
        loss.backward()

    if (i + 1) % accumulation_steps == 0:
        optimizer.step()
        optimizer.zero_grad()
\`\`\`

### 3. Logging Only on Rank 0

\`\`\`python
if rank == 0:
    print(f"Epoch {epoch}, Loss: {loss.item():.4f}")
    wandb.log({"loss": loss.item()})
\`\`\`

### 4. Saving and Loading Checkpoints

\`\`\`python
# Save only on rank 0
if rank == 0:
    torch.save(model.module.state_dict(), 'checkpoint.pt')

# All ranks must barrier before loading to avoid race conditions
dist.barrier()
model.module.load_state_dict(torch.load('checkpoint.pt'))
\`\`\`

### 5. find_unused_parameters

If your model has conditional forward paths (not all parameters used in every forward pass):

\`\`\`python
model = DDP(model, device_ids=[local_rank], find_unused_parameters=True)
\`\`\`

This adds overhead — avoid if possible by ensuring all parameters are used.

---

## Effective Batch Size and Learning Rate Scaling

When training with N GPUs, the effective batch size is \`N × per_gpu_batch_size\`. This requires adjusting the learning rate:

**Linear Scaling Rule** (Goyal et al., 2017):
\`\`\`
lr_new = lr_base × (effective_batch_size / reference_batch_size)
\`\`\`

Example: If reference is BS=256 with lr=1e-4, and you scale to 8 GPUs × 32 = BS=256, no change needed. If you scale to 8 GPUs × 256 = BS=2048, scale lr to 8e-4.

**Warmup is critical**: When scaling LR, always use a linear warmup (typically 1000–2000 steps) to stabilize early training.

---

## FSDP: When DDP Isn't Enough

For models that don't fit in a single GPU's memory, PyTorch offers **Fully Sharded Data Parallel (FSDP)** — based on ZeRO-3 from DeepSpeed:

\`\`\`python
from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp import MixedPrecision

mp_policy = MixedPrecision(
    param_dtype=torch.bfloat16,
    reduce_dtype=torch.float32,
    buffer_dtype=torch.bfloat16,
)

model = FSDP(model, mixed_precision=mp_policy)
\`\`\`

FSDP shards model parameters, gradients, and optimizer states across GPUs — enabling training of 70B+ models across multiple GPUs without model parallelism.

---

## Summary

| Approach | Use When | Key Advantage |
|----------|---------|---------------|
| DataParallel (DP) | Quick experiments, single node | Simplest code |
| DDP | Multi-GPU, model fits in 1 GPU | Full efficiency |
| FSDP | Model too large for 1 GPU | Shards everything |

For production LLM training: **DDP + FSDP (ZeRO)** is the standard starting point before adding pipeline or tensor parallelism.`,
    zh: `## 从理论到代码

![DDP 概览：每个 rank 处理不同数据，梯度通过 AllReduce 同步](/images/ddp-overview.png)

数据并行是每位分布式训练从业者首先学习的工具。本文涵盖从 PyTorch 基础 DP 到生产就绪的 DDP 的实践实现，以及决定真实性能的关键工程细节。

---

## PyTorch DataParallel（DP）——朴素方案

PyTorch 原始的 \`nn.DataParallel\` 使用简单但效率低下：

\`\`\`python
import torch
import torch.nn as nn

model = MyModel().cuda()
model = nn.DataParallel(model, device_ids=[0, 1, 2, 3])

# 训练循环
for batch in dataloader:
    inputs, labels = batch
    inputs = inputs.cuda()  # 数据先到 GPU 0
    outputs = model(inputs)  # 内部切分并分发
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()
\`\`\`

### DP 为什么慢

1. **Python GIL 瓶颈**：所有前向传播都从单个 Python 线程调度。
2. **GPU 0 成为瓶颈**：分发（输入分配）和汇聚（输出收集）都在 GPU 0 上进行，造成内存不均衡。
3. **梯度通信不能重叠**：所有反向传播完成后才同步梯度。
4. **单进程**：无法绕过 GIL——只使用一个 CPU 核心。

**DP 已不再推荐用于严肃训练。** 请改用 DDP。

---

## DistributedDataParallel（DDP）——标准方案

DDP 采用**每块 GPU 一个进程**的方式，绕过 GIL，并将梯度通信与反向传播计算重叠。

### 启动：使用 torchrun

\`\`\`bash
# 在 1 个节点（4 块 GPU）上启动 4 个进程
torchrun --nproc_per_node=4 train.py

# 多节点：2 个节点，各 4 块 GPU = 共 8 块
torchrun --nnodes=2 --nproc_per_node=4 \\
  --rdzv_id=100 --rdzv_backend=c10d \\
  --rdzv_endpoint=master_addr:29400 \\
  train.py
\`\`\`

### 使用 DDP 的训练脚本

\`\`\`python
import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP
from torch.utils.data.distributed import DistributedSampler

def setup():
    dist.init_process_group(backend='nccl')
    torch.cuda.set_device(int(os.environ['LOCAL_RANK']))

def cleanup():
    dist.destroy_process_group()

def train():
    setup()
    rank = dist.get_rank()
    local_rank = int(os.environ['LOCAL_RANK'])
    world_size = dist.get_world_size()

    # 模型设置
    model = MyModel().to(local_rank)
    model = DDP(model, device_ids=[local_rank])

    # 使用 DistributedSampler 的数据集
    dataset = MyDataset()
    sampler = DistributedSampler(dataset, num_replicas=world_size, rank=rank)
    dataloader = DataLoader(dataset, batch_size=32, sampler=sampler)

    optimizer = torch.optim.AdamW(model.parameters(), lr=1e-4)

    for epoch in range(num_epochs):
        sampler.set_epoch(epoch)  # 关键：确保每轮不同的随机打乱
        for batch in dataloader:
            inputs, labels = batch
            inputs = inputs.to(local_rank)
            labels = labels.to(local_rank)

            with torch.autocast(device_type='cuda', dtype=torch.bfloat16):
                outputs = model(inputs)
                loss = criterion(outputs, labels)

            loss.backward()
            optimizer.step()
            optimizer.zero_grad()

    cleanup()

if __name__ == '__main__':
    train()
\`\`\`

### DDP 的内部工作原理

![DDP 5 步流程：数据加载→前向传播→计算损失→反向传播+AllReduce→权重更新](/images/ddp-steps.png)

1. **前向传播**：每块 GPU 独立处理其小批次。
2. **反向传播**：梯度按层逐步计算（后进先出顺序），DDP 的钩子函数在**每个参数的梯度准备好时**立即触发 **AllReduce**——与前面层的反向传播重叠进行。
3. **优化器步骤**：每块 GPU 应用相同（已同步）的梯度来更新权重。由于所有 GPU 从相同的权重出发、接收相同的梯度，无需显式复制权重即可保持同步。

这种重叠正是 DDP 显著快于 DP 的原因。

---

## 关键实践细节

### 1. DistributedSampler 和 set_epoch()

\`\`\`python
sampler = DistributedSampler(dataset, shuffle=True)
# 每轮必须调用，以获得不同的随机打乱
sampler.set_epoch(epoch)
\`\`\`

不调用 \`set_epoch()\`，每轮使用相同的数据顺序——实际上减少了数据多样性。

### 2. DDP 下的梯度累积

使用梯度累积（模拟更大批次大小）时，只在最后一个累积步骤同步梯度：

\`\`\`python
accumulation_steps = 4

for i, batch in enumerate(dataloader):
    # 中间步骤不同步梯度
    with model.no_sync() if (i + 1) % accumulation_steps != 0 else contextlib.nullcontext():
        loss = model(batch) / accumulation_steps
        loss.backward()

    if (i + 1) % accumulation_steps == 0:
        optimizer.step()
        optimizer.zero_grad()
\`\`\`

### 3. 只在 Rank 0 上记录日志

\`\`\`python
if rank == 0:
    print(f"Epoch {epoch}, Loss: {loss.item():.4f}")
    wandb.log({"loss": loss.item()})
\`\`\`

### 4. 保存和加载检查点

\`\`\`python
# 只在 rank 0 上保存
if rank == 0:
    torch.save(model.module.state_dict(), 'checkpoint.pt')

# 所有 rank 需要在加载前同步，避免竞争条件
dist.barrier()
model.module.load_state_dict(torch.load('checkpoint.pt'))
\`\`\`

### 5. find_unused_parameters

如果模型有条件前向路径（并非每次前向传播都使用所有参数）：

\`\`\`python
model = DDP(model, device_ids=[local_rank], find_unused_parameters=True)
\`\`\`

这会增加开销——尽量通过确保所有参数都被使用来避免。

---

## 有效批量大小与学习率缩放

用 N 块 GPU 训练时，有效批量大小为 \`N × 每块 GPU 批量大小\`。这需要调整学习率：

**线性缩放规则**（Goyal 等，2017）：
\`\`\`
lr_new = lr_base × (有效批量大小 / 参考批量大小)
\`\`\`

例如：如果参考批量大小为 256、lr=1e-4，扩展到 8 块 GPU × 32 = 批量大小 256，无需更改。如果扩展到 8 块 GPU × 256 = 批量大小 2048，lr 缩放到 8e-4。

**预热是关键**：缩放学习率时，始终使用线性预热（通常 1000–2000 步）以稳定早期训练。

---

## FSDP：当 DDP 不够用时

对于单块 GPU 放不下的模型，PyTorch 提供了**完全分片数据并行（FSDP）**——基于 DeepSpeed 的 ZeRO-3：

\`\`\`python
from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
from torch.distributed.fsdp import MixedPrecision

mp_policy = MixedPrecision(
    param_dtype=torch.bfloat16,
    reduce_dtype=torch.float32,
    buffer_dtype=torch.bfloat16,
)

model = FSDP(model, mixed_precision=mp_policy)
\`\`\`

FSDP 将模型参数、梯度和优化器状态分片到各 GPU 上——无需模型并行即可在多块 GPU 上训练 700 亿参数以上的模型。

---

## 总结

| 方案 | 适用场景 | 核心优势 |
|------|---------|---------|
| DataParallel（DP）| 快速实验，单节点 | 代码最简单 |
| DDP | 多 GPU，模型能放入 1 块 GPU | 完整效率 |
| FSDP | 模型超过 1 块 GPU 容量 | 分片所有内容 |

对于生产大模型训练：**DDP + FSDP（ZeRO）** 是在添加流水线或张量并行之前的标准起点。`
  }
}

export const modelParallelStrategy: TopicContent = {
  id: 'model-parallel-strategy',
  title: { en: 'Model Parallel Training Strategy', zh: '模型并行训练策略' },
  contentType: 'article',
  content: {
    en: `## When Model Parallelism Is Needed

A 70B parameter model in BF16 requires ~140 GB just for weights. Add gradients and optimizer states, and you're looking at ~840 GB. No single GPU has that much memory — not even close.

Model parallelism solves this by **splitting the model itself** across GPUs. Unlike data parallelism where every GPU has the whole model, here each GPU holds only a fraction.

---

## Tensor Parallelism (TP): Splitting Within Layers

Tensor parallelism splits individual large layers — specifically the linear transformations — across multiple GPUs.

### The Key Insight: Transformer Linear Layers

In a transformer, the most memory-intensive layers are:
- **Attention projections**: Q, K, V projections and output projection
- **MLP/FFN layers**: Two large linear layers (expand and contract)

These are all matrix multiplications: Y = X × W. If W is too large, split it.

### Column Parallelism

Split weight matrix W by **columns** (output features):

\`\`\`
W (d_model × d_ffn) → [W1 | W2 | W3 | W4]
Each GPU holds W_i (d_model × d_ffn/4)

GPU i: Y_i = X × W_i  (local matmul, no communication)
Then: AllGather → Y = [Y1 | Y2 | Y3 | Y4]
\`\`\`

The forward pass requires **no communication** — each GPU computes its partial output independently. AllGather is only needed at the layer boundary.

### Row Parallelism

Split weight matrix W by **rows** (input features):

\`\`\`
W (d_ffn × d_model) → split by rows: W1, W2, W3, W4
Each GPU holds W_i (d_ffn/4 × d_model)

Each GPU has the corresponding slice of input X_i
GPU i: Y_i = X_i × W_i  (partial result)
Then: AllReduce → Y = Y1 + Y2 + Y3 + Y4
\`\`\`

### Combining Column + Row (Megatron's Approach)

![Tensor parallel MLP: column-parallel first linear, row-parallel second linear](/images/mp-tensor-parallel-mlp.png)

For the FFN block (two linear layers):
1. First linear: **Column parallel** (no output communication)
2. Activation function: Local (no communication)
3. Second linear: **Row parallel** + AllReduce

Result: Only **one AllReduce per FFN block** instead of two. This is Megatron-LM's core optimization.

\`\`\`python
# Megatron-LM tensor parallel MLP
class TensorParallelMLP(nn.Module):
    def __init__(self, d_model, d_ffn, tp_size):
        # Column parallel: splits d_ffn across GPUs
        self.fc1 = ColumnParallelLinear(d_model, d_ffn)
        # Row parallel: reduces across GPUs
        self.fc2 = RowParallelLinear(d_ffn, d_model)

    def forward(self, x):
        x = self.fc1(x)    # Each GPU: [batch, seq, d_ffn/tp_size], no comm
        x = F.gelu(x)      # Local
        x = self.fc2(x)    # AllReduce across GPUs
        return x
\`\`\`

### Attention with Tensor Parallelism

Multi-head attention is naturally tensor-parallel: **each GPU handles a subset of attention heads**.

- TP=4, 32 heads → each GPU handles 8 heads
- Q, K, V projections are column-parallel (split by heads)
- Output projection is row-parallel (reduce across head outputs)
- Again: **one AllReduce per attention block**

### TP Communication Cost

Every transformer layer requires **2 AllReduce operations** (one for attention, one for FFN):
- Forward: 2 AllReduce per layer
- Backward: 2 AllGather + 2 ReduceScatter per layer

For a 32-layer model with TP=8, that's 256 collective operations per step. This is why tensor parallelism requires **NVLink-class bandwidth** — InfiniBand is usually too slow.

**Practical limit: TP degree ≤ number of GPUs per node (typically 8)**

---

## Pipeline Parallelism (PP): Splitting Across Layers

Pipeline parallelism assigns **consecutive transformer layers** to consecutive GPUs.

### Basic Setup

\`\`\`
Model: 32 transformer layers
4 GPUs with PP=4:

GPU 0: Embedding + Layers 1-8
GPU 1: Layers 9-16
GPU 2: Layers 17-24
GPU 3: Layers 25-32 + LM Head + Loss
\`\`\`

### The Pipeline Bubble

Naive pipeline:
\`\`\`
Time:  1  2  3  4  5  6  7  8
GPU 0: F  .  .  .  B  .  .  .   (F=forward, B=backward)
GPU 1: .  F  .  .  .  B  .  .
GPU 2: .  .  F  .  .  .  B  .
GPU 3: .  .  .  F  .  .  .  B
\`\`\`

3 out of 4 time slots are idle ("bubble"). Bubble fraction = (PP-1)/(PP+m-1) where m = number of micro-batches.

### 1F1B Schedule (Interleaved Pipeline)

![Pipeline parallel 1F1B schedule: stages 0-3 with forward(blue) and backward(green) micro-batches](/images/mp-pipeline-schedule.png)

Split each batch into micro-batches, alternate forward and backward:

\`\`\`
Time:  1  2  3  4  5  6  7  8  9  10
GPU 0: F1 F2 F3 F4 B4 B3 B2 B1  .  .
GPU 1: .  F1 F2 F3 F4 B4 B3 B2 B1 .
GPU 2: .  .  F1 F2 F3 F4 B4 B3 B2 B1
GPU 3: .  .  .  F1 F2 F3 F4 B4 B3 B2 B1
\`\`\`

With 4 micro-batches (m=4) and PP=4, bubble = (PP-1)/(PP+m-1) = 3/7 ≈ 43%. With m=8: 3/11 ≈ 27%.

More micro-batches → smaller bubble. But more micro-batches → more intermediate activations to store.

### Activation Memory in Pipeline Parallelism

Each micro-batch's activations must be kept in memory for the backward pass. With m micro-batches in the pipeline:

\`\`\`
Activation memory ≈ m × (activations per micro-batch)
\`\`\`

**Activation Checkpointing** is almost always used with PP: recompute activations during backward pass instead of storing them. Trades ~33% extra compute for significant memory savings.

### VPP (Virtual Pipeline Parallelism)

Megatron's interleaved schedule assigns **multiple non-contiguous layer chunks** to each GPU:

\`\`\`
PP=4, 32 layers, VPP=2 (2 chunks per GPU):
GPU 0: Layers [1-4, 17-20]
GPU 1: Layers [5-8, 21-24]
GPU 2: Layers [9-12, 25-28]
GPU 3: Layers [13-16, 29-32]
\`\`\`

This reduces bubble fraction from (PP-1)/(m+PP-1) to (PP-1)/(m+v×PP-1) where v is the number of chunks. More communication, smaller bubble.

---

## Sequence Parallelism

An extension often paired with tensor parallelism: split the **sequence dimension** across GPUs to reduce activation memory.

In vanilla TP, LayerNorm and Dropout activations are replicated on all GPUs (they can't be tensor-parallelized). Sequence Parallelism:
- Keeps sequence chunks on separate GPUs between TP regions
- Uses AllGather before TP operations, ReduceScatter after
- Reduces activation memory proportionally to TP degree

---

## Choosing Your Strategy

| GPU Count | Recommended Strategy |
|-----------|---------------------|
| 1–4 GPUs | DDP + FSDP (ZeRO-3) |
| 8 GPUs (1 node) | DDP/FSDP + TP=8 |
| 16–32 GPUs (2–4 nodes) | TP=8 + PP=2/4, DP=1 |
| 64–512 GPUs | TP=8 + PP=4-8 + DP=N |
| 1000+ GPUs | 3D Parallel + ZeRO |

**Rule of thumb**: Maximize TP within nodes (NVLink), use PP across nodes (InfiniBand), and add DP to fill remaining GPU budget.`,
    zh: `## 何时需要模型并行

BF16 格式的 700 亿参数模型仅权重就需要约 140 GB。加上梯度和优化器状态，大约需要 840 GB。没有任何单块 GPU 能装得下——差距非常大。

模型并行通过**将模型本身切分到多块 GPU 上**来解决这个问题。与数据并行中每块 GPU 持有完整模型不同，这里每块 GPU 只持有模型的一部分。

---

## 张量并行（TP）：层内切分

张量并行将单个大型层——特别是线性变换——切分到多块 GPU 上。

### 关键洞见：Transformer 的线性层

在 Transformer 中，内存占用最大的层是：
- **注意力投影**：Q、K、V 投影和输出投影
- **MLP/FFN 层**：两个大型线性层（扩展和收缩）

这些都是矩阵乘法：Y = X × W。如果 W 太大，就切分它。

### 列并行

按**列**（输出特征）切分权重矩阵 W：

\`\`\`
W (d_model × d_ffn) → [W1 | W2 | W3 | W4]
每块 GPU 持有 W_i (d_model × d_ffn/4)

GPU i: Y_i = X × W_i  (本地矩阵乘，无通信)
然后: AllGather → Y = [Y1 | Y2 | Y3 | Y4]
\`\`\`

前向传播**不需要通信**——每块 GPU 独立计算其部分输出。只在层边界需要 AllGather。

### 行并行

按**行**（输入特征）切分权重矩阵 W：

\`\`\`
W (d_ffn × d_model) → 按行切分：W1, W2, W3, W4
每块 GPU 持有 W_i (d_ffn/4 × d_model)

每块 GPU 有对应的输入切片 X_i
GPU i: Y_i = X_i × W_i  （部分结果）
然后: AllReduce → Y = Y1 + Y2 + Y3 + Y4
\`\`\`

### 列并行 + 行并行组合（Megatron 方案）

![张量并行 MLP：第一个线性层列并行，第二个线性层行并行](/images/mp-tensor-parallel-mlp.png)

对于 FFN 块（两个线性层）：
1. 第一个线性层：**列并行**（输出无需通信）
2. 激活函数：本地计算（无通信）
3. 第二个线性层：**行并行** + AllReduce

结果：每个 FFN 块只需**一次 AllReduce**，而非两次。这是 Megatron-LM 的核心优化。

### 注意力的张量并行

多头注意力天然支持张量并行：**每块 GPU 处理一个子集的注意力头**。

- TP=4，32 个头 → 每块 GPU 处理 8 个头
- Q、K、V 投影为列并行（按头切分）
- 输出投影为行并行（对头输出求和）
- 同样：**每个注意力块只需一次 AllReduce**

### TP 通信成本

每个 Transformer 层需要 **2 次 AllReduce**（注意力一次，FFN 一次）：
- 前向：每层 2 次 AllReduce
- 反向：每层 2 次 AllGather + 2 次 ReduceScatter

对于 32 层模型、TP=8，每步需要 256 次集体通信操作。这就是张量并行需要 **NVLink 级别带宽** 的原因——InfiniBand 通常太慢。

**实际限制：TP 度 ≤ 每个节点的 GPU 数量（通常为 8）**

---

## 流水线并行（PP）：跨层切分

流水线并行将**连续的 Transformer 层**分配给连续的 GPU。

### 基本设置

\`\`\`
模型：32 个 Transformer 层
4 块 GPU，PP=4：

GPU 0：嵌入层 + 第 1-8 层
GPU 1：第 9-16 层
GPU 2：第 17-24 层
GPU 3：第 25-32 层 + LM Head + Loss
\`\`\`

### 流水线气泡

朴素流水线：
\`\`\`
时间:  1  2  3  4  5  6  7  8
GPU 0: F  .  .  .  B  .  .  .   (F=前向, B=反向)
GPU 1: .  F  .  .  .  B  .  .
GPU 2: .  .  F  .  .  .  B  .
GPU 3: .  .  .  F  .  .  .  B
\`\`\`

4 个时间槽中有 3 个空闲（"气泡"）。气泡比例 = (PP-1)/(PP+m-1)，其中 m = 微批次数量。

### 1F1B 调度（交错流水线）

![流水线并行 1F1B 调度：Stage 0-3 的正向（蓝）与反向（绿）微批次时序](/images/mp-pipeline-schedule.png)

将每个批次切分为微批次，交替进行前向和反向传播：

使用 4 个微批次（m=4）、PP=4，气泡 = (PP-1)/(PP+m-1) = 3/7 ≈ 43%。m=8 时：3/11 ≈ 27%。

更多微批次 → 气泡更小。但更多微批次 → 需要存储更多中间激活值。

### 流水线并行中的激活值内存

每个微批次的激活值必须保留在内存中，直到反向传播。流水线中有 m 个微批次：

\`\`\`
激活值内存 ≈ m × (每个微批次的激活值)
\`\`\`

**激活值重计算**几乎总是与 PP 一起使用：在反向传播时重新计算激活值，而不是存储它们。用约 33% 的额外计算换取显著的内存节省。

### VPP（虚拟流水线并行）

Megatron 的交错调度将**多个不连续的层块**分配给每块 GPU：

\`\`\`
PP=4，32 层，VPP=2（每块 GPU 2 个层块）：
GPU 0：第 [1-4, 17-20] 层
GPU 1：第 [5-8, 21-24] 层
GPU 2：第 [9-12, 25-28] 层
GPU 3：第 [13-16, 29-32] 层
\`\`\`

气泡比例从 (PP-1)/(m+PP-1) 降至 (PP-1)/(m+v×PP-1)，其中 v 是层块数量。通信增多，气泡变小。

---

## 序列并行

通常与张量并行配合使用的扩展：将**序列维度**切分到各 GPU 上，以减少激活值内存。

在普通 TP 中，LayerNorm 和 Dropout 的激活值在所有 GPU 上都有副本（无法张量并行化）。序列并行：
- 在 TP 区域之间将序列块保留在不同 GPU 上
- TP 操作前使用 AllGather，之后使用 ReduceScatter
- 激活值内存与 TP 度成比例减少

---

## 策略选择指南

| GPU 数量 | 推荐策略 |
|----------|---------|
| 1–4 块 GPU | DDP + FSDP（ZeRO-3）|
| 8 块 GPU（1 个节点）| DDP/FSDP + TP=8 |
| 16–32 块 GPU（2–4 个节点）| TP=8 + PP=2/4, DP=1 |
| 64–512 块 GPU | TP=8 + PP=4-8 + DP=N |
| 1000+ 块 GPU | 3D 并行 + ZeRO |

**经验法则**：在节点内最大化 TP（NVLink），跨节点使用 PP（InfiniBand），再添加 DP 来充分利用剩余 GPU 预算。`
  }
}

export const zeroSeries: TopicContent = {
  id: 'zero-series',
  title: { en: 'ZeRO Series Analysis', zh: 'ZeRO\u7cfb\u5217\u89e3\u6790' },
  contentType: 'article',
  content: {
    en: `## What is ZeRO?

**ZeRO (Zero Redundancy Optimizer)** is a memory optimization technique from Microsoft's DeepSpeed, published in 2020. It enables training large language models that would otherwise be impossible with standard data parallelism by eliminating memory redundancy across GPUs.

![DeepSpeed + ZeRO: Scale 100B+ parameters, 10x bigger, 5x faster, 5x cheaper with minimal code change](/images/zero-deepspeed-overview.png)

ZeRO achieves:
- **10\u00d7** larger model scale
- **5\u00d7** faster training speed
- **5\u00d7** lower training cost
- **Minimal code changes** to existing training scripts

---

## The Transformer Stack

A modern LLM is built as a stack of Transformer layers. Each layer contains attention blocks and feed-forward networks:

![A horizontal Transformer stack showing sequential layers connected left to right](/images/zero-transformer-stack.png)

During training, every parameter in this stack must be stored along with its gradient and optimizer state. For a **7.5B parameter model**, this grows to **120 GB** of memory per GPU in standard data parallelism \u2014 far exceeding the 80 GB of today's best GPUs.

---

## Data Parallelism: The Baseline Problem

In standard **data parallelism**, we split the training dataset across GPUs. Each GPU processes a different batch:

![Data shards distributed to GPU\u2080, GPU\u2081, GPU\u2082, GPU\u2083 \u2014 each GPU is initially empty](/images/zero-data-distribution.png)

But every GPU stores a **complete copy** of the model weights, gradients, and optimizer states:

![4 GPUs each holding full model: M\u2080 on GPU\u2080, M\u2081 on GPU\u2081, M\u2082 on GPU\u2082, M\u2083 on GPU\u2083 \u2014 all identical redundant copies](/images/zero-data-parallel-baseline.png)

For a model with **\u03a8** parameters, in mixed-precision training (Adam optimizer):

| Component | Size | Notes |
|-----------|------|-------|
| FP16 parameters | 2\u03a8 bytes | For forward/backward compute |
| FP32 master weights | 4\u03a8 bytes | "Master copy" for precision |
| FP32 gradients | 4\u03a8 bytes | Accumulated per step |
| FP32 Adam momentum (m) | 4\u03a8 bytes | First moment |
| FP32 Adam variance (v) | 4\u03a8 bytes | Second moment |
| **Total** | **(2+2+K)\u03a8 bytes** | K=12 for Adam mixed precision |

With K=12, \u03a8=7.5B, N_d=64 GPUs: each GPU uses **120 GB** \u2014 identical redundant state on every GPU.

---

## Memory Savings: ZeRO Stage by Stage

![Memory comparison chart: Baseline 120GB \u2192 Stage 1 (P_os) 31.4GB \u2192 Stage 2 (P_os+g) 16.6GB \u2192 Stage 3 (P_os+g+p) 1.9GB for \u03a8=7.5B, N_d=64, K=12](/images/zero-memory-comparison.png)

ZeRO partitions model state across N_d data-parallel GPUs in three progressively aggressive stages. The core insight: instead of every GPU holding *everything*, each GPU holds *its 1/N_d share* and communicates when it needs the rest.

---

## ZeRO Stage 1: Optimizer State Partitioning (P_os)

**What's partitioned**: Optimizer states (momentum + variance) \u2014 the green blocks in the diagram.

Each GPU only holds **1/N_d** of the Adam optimizer states. Parameters and gradients are still fully replicated. After computing gradients via AllReduce, each GPU updates only its own optimizer shard locally.

**Before Stage 1** \u2014 full replication on every GPU:

![All 4 GPUs hold the complete model: full parameters (blue), gradients (orange), and optimizer states (green)](/images/zero-baseline-full-model.png)

**After Stage 1** \u2014 optimizer states partitioned, parameters and gradients still full:

![ZeRO Stage 1: each GPU still has full parameters and gradients, but only a small 1/N_d shard of optimizer states](/images/zero-stage1-pos.png)

    Memory per GPU = 2\u03a8 + 2\u03a8 + K\u00b7\u03a8/N_d
    With K=12, \u03a8=7.5B, N_d=64: \u2192 31.4 GB  (vs 120 GB baseline)

**Communication**: Same as vanilla DDP \u2014 one AllReduce for gradients. Zero additional overhead.

**Best for**: Models that fit in GPU memory but need larger batch sizes.

---

## ZeRO Stage 2: Gradient + Optimizer State Partitioning (P_os+g)

**What's partitioned**: Gradients + optimizer states.

After backprop, each gradient is ReduceScattered to the GPU responsible for that parameter shard. That GPU performs the optimizer update locally. Gradients outside your shard are immediately discarded.

![ZeRO Stage 2: each GPU holds full parameters but only 1/N_d of gradients (orange) and optimizer states (green)](/images/zero-stage2-pos-g.png)

During the backward pass, gradients flow via **ReduceScatter** instead of AllReduce \u2014 directing each gradient to its responsible GPU:

![Stage 2 backward pass: ReduceScatter routes gradients to the responsible GPU shard, then each GPU updates its optimizer shard](/images/zero-stage2-backward.png)

    Memory per GPU = 2\u03a8 + (2+K)\u00b7\u03a8/N_d
    With K=12, \u03a8=7.5B, N_d=64: \u2192 16.6 GB

**Communication**: ReduceScatter (same total volume as AllReduce, just reorganized \u2014 essentially free overhead).

---

## ZeRO Stage 3: Full Partitioning (P_os+g+p)

**What's partitioned**: Parameters + gradients + optimizer states \u2014 **everything**.

Each GPU holds only **1/N_d** of all model state. Parameters are fetched on-demand via AllGather just before each layer's computation, then immediately discarded after.

### Mixed Precision Memory Layout

![Per-GPU memory layout: each GPU's shard contains 1/N_d of FP16 parameters, FP32 variance, FP32 momentum, and FP32 master parameters](/images/zero-mixed-precision-layout.png)

Each GPU's slice contains all four components for its parameter shard: FP16 working copy, FP32 master, FP32 momentum, FP32 variance \u2014 just 1/N_d as much as before.

### Forward Pass: AllGather Parameters On-Demand

As the forward pass moves layer by layer, each GPU broadcasts its parameter shard so all GPUs can compute that layer:

![Stage 3 full forward: via AllGather each GPU momentarily holds full parameters for the current layer, with Loss computed at the end](/images/zero-stage3-full-forward.png)

After each layer's computation, the full parameters are dropped and only the shard is retained:

![Stage 3 AllGather detail: one GPU's shard is gathered to reconstruct the full layer, used, then freed \u2014 next layer repeats](/images/zero-stage3-allgather.png)

### Backward Pass: Recompute Gradients, Then Scatter

During backward, parameters are gathered again (same AllGather pattern) to compute gradients for each layer:

![Stage 3 backward: parameters AllGathered again for gradient computation \u2014 full model momentarily visible on each GPU](/images/zero-stage3-backward.png)

After gradients are computed, **ReduceScatter** sends each gradient back to its responsible GPU \u2014 each GPU keeps only its own gradient shard:

![Stage 3 ReduceScatter: after backward pass, gradients are scattered back to owning GPU shards, non-owned portions discarded](/images/zero-stage3-reduce-scatter.png)

    Memory per GPU = (2+2+K)\u00b7\u03a8 / N_d
    With K=12, \u03a8=7.5B, N_d=64: \u2192 1.9 GB

**Communication overhead**: ~1.5\u00d7 AllReduce equivalent \u2014 the extra AllGather for parameters adds ~50% more communication volume. Entirely worth it for models that cannot fit on a single GPU.

\`\`\`python
# ZeRO Stage 3 with DeepSpeed
ds_config = {
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {"device": "cpu"},  # Optional CPU offload
        "offload_param": {"device": "cpu"},       # Optional param offload
    },
    "bf16": {"enabled": True}
}

model_engine, optimizer, _, _ = deepspeed.initialize(
    model=model,
    config=ds_config
)
\`\`\`

---

## ZeRO-Offload: CPU as Overflow Memory

ZeRO-Offload extends Stage 2/3 by moving optimizer states (and optionally parameters) to **CPU RAM**:

- GPU handles forward/backward compute (fast)
- CPU handles Adam updates (slow, but runs in parallel with GPU compute)

    Bandwidth comparison:
    GPU HBM:           2\u20134 TB/s
    NVLink (GPU\u2194GPU):  600\u2013900 GB/s
    PCIe (CPU\u2194GPU):    ~32 GB/s
    NVMe SSD:          ~7 GB/s

A single 80 GB GPU can train a model slice far larger than its memory with ZeRO-Offload + NVMe (ZeRO-Infinity) \u2014 at the cost of much lower training throughput.

---

## ZeRO Stages Comparison

| Stage | Partitions | Memory/GPU | Communication vs DDP |
|-------|-----------|-----------|---------------------|
| DDP (baseline) | Nothing | (2+2+K)\u03a8 = **120 GB** | 1\u00d7 AllReduce |
| ZeRO-1 (P_os) | Optimizer states | 2\u03a8+2\u03a8+K\u03a8/N_d = **31.4 GB** | 1\u00d7 AllReduce |
| ZeRO-2 (P_os+g) | Optim + Gradients | 2\u03a8+(2+K)\u03a8/N_d = **16.6 GB** | 1\u00d7 ReduceScatter + AllGather |
| ZeRO-3 (P_os+g+p) | Everything | (2+2+K)\u03a8/N_d = **1.9 GB** | ~1.5\u00d7 AllReduce |
| ZeRO-Offload | + CPU offload | GPU: active shard only | + PCIe overhead |

*(Numbers for \u03a8=7.5B, N_d=64, K=12)*

## When to Use Which Stage

- **ZeRO-1**: Model fits in GPU memory, just need batch size headroom \u2014 minimal overhead
- **ZeRO-2**: Model barely fits; free gradient memory \u2014 essentially free
- **ZeRO-3 / FSDP**: Model doesn't fit on one GPU \u2014 enables arbitrary scale
- **ZeRO-Offload**: Limited GPU count; willing to trade speed for capacity

ZeRO is arguably the single most impactful technique in practical LLM training \u2014 it's what makes training 70B+ models on clusters of commodity GPUs feasible.`,
    zh: `## \u4ec0\u4e48\u662f ZeRO\uff1f

**ZeRO\uff08\u96f6\u5197\u4f59\u4f18\u5316\u5668\uff09**\u662f\u5fae\u8f6f DeepSpeed \u4e8e 2020 \u5e74\u53d1\u5e03\u7684\u5185\u5b58\u4f18\u5316\u6280\u672f\u3002\u5b83\u901a\u8fc7\u6d88\u9664 GPU \u95f4\u7684\u5185\u5b58\u5197\u4f59\uff0c\u4f7f\u8bad\u7ec3\u6807\u51c6\u6570\u636e\u5e76\u884c\u65e0\u6cd5\u5b9e\u73b0\u7684\u8d85\u5927\u8bed\u8a00\u6a21\u578b\u6210\u4e3a\u53ef\u80fd\u3002

![DeepSpeed + ZeRO\uff1a\u89c4\u6a21\u6269\u5927 10 \u500d\u3001\u901f\u5ea6\u63d0\u5347 5 \u500d\u3001\u6210\u672c\u964d\u4f4e 5 \u500d\uff0c\u4e14\u4ee3\u7801\u6539\u52a8\u6781\u5c11](/images/zero-deepspeed-overview.png)

ZeRO \u5b9e\u73b0\u4e86\uff1a
- **10 \u500d**\u66f4\u5927\u7684\u6a21\u578b\u89c4\u6a21
- **5 \u500d**\u66f4\u5feb\u7684\u8bad\u7ec3\u901f\u5ea6
- **5 \u500d**\u66f4\u4f4e\u7684\u8bad\u7ec3\u6210\u672c
- **\u6781\u5c11\u7684\u4ee3\u7801\u6539\u52a8**

---

## Transformer \u6a21\u578b\u7ed3\u6784

\u73b0\u4ee3\u5927\u8bed\u8a00\u6a21\u578b\u7531\u591a\u5c42 Transformer \u5806\u53e0\u6784\u6210\u3002\u6bcf\u5c42\u5305\u542b\u6ce8\u610f\u529b\u5757\u548c\u524d\u9988\u7f51\u7edc\uff1a

![\u6c34\u5e73\u5c55\u5f00\u7684 Transformer \u5c42\u5e8f\u5217\uff0c\u5404\u5c42\u4ece\u5de6\u5411\u53f3\u4f9d\u6b21\u76f8\u8fde](/images/zero-transformer-stack.png)

\u8bad\u7ec3\u65f6\uff0c\u8fd9\u4e2a\u5806\u53e0\u4e2d\u7684\u6bcf\u4e2a\u53c2\u6570\u90fd\u5fc5\u987b\u4e0e\u5176\u68af\u5ea6\u548c\u4f18\u5316\u5668\u72b6\u6001\u4e00\u540c\u5b58\u50a8\u3002\u5bf9\u4e8e **75 \u4ebf\u53c2\u6570**\u7684\u6a21\u578b\uff0c\u5728\u6807\u51c6\u6570\u636e\u5e76\u884c\u4e0b\u6bcf\u5757 GPU \u9700\u8981 **120 GB** \u5185\u5b58\u2014\u2014\u8fdc\u8d85\u5f53\u4eca\u6700\u597d GPU \u7684 80 GB\u3002

---

## \u6570\u636e\u5e76\u884c\uff1a\u57fa\u51c6\u95ee\u9898

\u5728\u6807\u51c6**\u6570\u636e\u5e76\u884c**\u4e2d\uff0c\u6211\u4eec\u5c06\u8bad\u7ec3\u6570\u636e\u5206\u53d1\u5230\u5404 GPU\uff0c\u6bcf\u5757 GPU \u5904\u7406\u4e0d\u540c\u6279\u6b21\uff1a

![\u6570\u636e\u5206\u7247\u5206\u53d1\u7ed9 GPU\u2080\u3001GPU\u2081\u3001GPU\u2082\u3001GPU\u2083\u2014\u2014\u5404 GPU \u521d\u59cb\u4e3a\u7a7a](/images/zero-data-distribution.png)

\u95ee\u9898\u5728\u4e8e\u2014\u2014\u6bcf\u5757 GPU \u90fd\u5b58\u50a8**\u5b8c\u6574\u526f\u672c**\u7684\u6a21\u578b\u6743\u91cd\u3001\u68af\u5ea6\u548c\u4f18\u5316\u5668\u72b6\u6001\uff1a

![4 \u5757 GPU \u5404\u81ea\u6301\u6709\u5b8c\u6574\u6a21\u578b\uff1aGPU\u2080 \u4e0a M\u2080\u3001GPU\u2081 \u4e0a M\u2081\u3001GPU\u2082 \u4e0a M\u2082\u3001GPU\u2083 \u4e0a M\u2083\u2014\u2014\u5b8c\u5168\u76f8\u540c\u7684\u5197\u4f59\u526f\u672c](/images/zero-data-parallel-baseline.png)

\u5bf9\u4e8e\u53c2\u6570\u91cf\u4e3a **\u03a8** \u7684\u6a21\u578b\uff0c\u5728\u6df7\u5408\u7cbe\u5ea6\u8bad\u7ec3\uff08Adam \u4f18\u5316\u5668\uff09\u4e0b\uff1a

| \u7ec4\u4ef6 | \u5927\u5c0f | \u5907\u6ce8 |
|------|------|------|
| FP16 \u53c2\u6570 | 2\u03a8 \u5b57\u8282 | \u7528\u4e8e\u524d\u5411/\u53cd\u5411\u8ba1\u7b97 |
| FP32 \u4e3b\u6743\u91cd | 4\u03a8 \u5b57\u8282 | \u7cbe\u5ea6\u4fdd\u8bc1\u7684\u201c\u4e3b\u526f\u672c\u201d |
| FP32 \u68af\u5ea6 | 4\u03a8 \u5b57\u8282 | \u6bcf\u6b65\u7d2f\u79ef |
| FP32 Adam \u52a8\u91cf\uff08m\uff09| 4\u03a8 \u5b57\u8282 | \u4e00\u9636\u77e9 |
| FP32 Adam \u65b9\u5dee\uff08v\uff09| 4\u03a8 \u5b57\u8282 | \u4e8c\u9636\u77e9 |
| **\u603b\u8ba1** | **(2+2+K)\u03a8 \u5b57\u8282** | Adam \u6df7\u5408\u7cbe\u5ea6 K=12 |

\u4ee5 K=12\u3001\u03a8=75 \u4ebf\u53c2\u6570\u3001N_d=64 \u5757 GPU \u4e3a\u4f8b\uff1a\u6bcf\u5757 GPU \u4f7f\u7528 **120 GB** \u5185\u5b58\u2014\u2014\u6bcf\u5757 GPU \u90fd\u662f\u76f8\u540c\u7684\u5197\u4f59\u72b6\u6001\u3002

---

## \u5185\u5b58\u8282\u7701\uff1aZeRO \u5404\u9636\u6bb5\u9010\u6b65\u5206\u6790

![\u5185\u5b58\u5bf9\u6bd4\u56fe\uff1a\u57fa\u51c6 120GB \u2192 Stage 1 (P_os) 31.4GB \u2192 Stage 2 (P_os+g) 16.6GB \u2192 Stage 3 (P_os+g+p) 1.9GB\uff0c\u53c2\u6570 \u03a8=75\u4ebf\u3001N_d=64\u3001K=12](/images/zero-memory-comparison.png)

ZeRO \u901a\u8fc7\u4e09\u4e2a\u9010\u6b65\u6fc0\u8fdb\u7684\u9636\u6bb5\uff0c\u5c06\u6a21\u578b\u72b6\u6001\u5206\u7247\u5230 N_d \u5757\u6570\u636e\u5e76\u884c GPU \u4e0a\u3002\u6838\u5fc3\u601d\u8def\uff1a\u4e0d\u518d\u8ba9\u6bcf\u5757 GPU \u6301\u6709*\u6240\u6709\u5185\u5bb9*\uff0c\u800c\u662f\u6bcf\u5757 GPU \u53ea\u6301\u6709 *1/N_d \u4efd\u989d*\uff0c\u9700\u8981\u65f6\u518d\u901a\u4fe1\u83b7\u53d6\u5176\u4f59\u90e8\u5206\u3002

---

## ZeRO Stage 1\uff1a\u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff08P_os\uff09

**\u5206\u7247\u5185\u5bb9**\uff1a\u4f18\u5316\u5668\u72b6\u6001\uff08\u52a8\u91cf + \u65b9\u5dee\uff09\u2014\u2014\u56fe\u4e2d\u7eff\u8272\u5757\u3002

\u6bcf\u5757 GPU \u53ea\u6301\u6709 **1/N_d** \u7684 Adam \u4f18\u5316\u5668\u72b6\u6001\u3002\u53c2\u6570\u548c\u68af\u5ea6\u4ecd\u7136\u5b8c\u6574\u590d\u5236\u3002\u901a\u8fc7 AllReduce \u8ba1\u7b97\u68af\u5ea6\u540e\uff0c\u6bcf\u5757 GPU \u53ea\u5728\u672c\u5730\u66f4\u65b0\u81ea\u5df1\u8d1f\u8d23\u7684\u90a3\u4efd\u4f18\u5316\u5668\u72b6\u6001\u3002

**Stage 1 \u4e4b\u524d**\u2014\u2014\u6bcf\u5757 GPU \u5b8c\u6574\u590d\u5236\uff1a

![4 \u5757 GPU \u5404\u81ea\u6301\u6709\u5b8c\u6574\u6a21\u578b\uff1a\u5b8c\u6574\u7684\u53c2\u6570\uff08\u84dd\u8272\uff09\u3001\u68af\u5ea6\uff08\u6a59\u8272\uff09\u548c\u4f18\u5316\u5668\u72b6\u6001\uff08\u7eff\u8272\uff09](/images/zero-baseline-full-model.png)

**Stage 1 \u4e4b\u540e**\u2014\u2014\u4f18\u5316\u5668\u72b6\u6001\u5df2\u5206\u7247\uff0c\u53c2\u6570\u548c\u68af\u5ea6\u4ecd\u7136\u5b8c\u6574\uff1a

![ZeRO Stage 1\uff1a\u6bcf\u5757 GPU \u4ecd\u6301\u6709\u5b8c\u6574\u53c2\u6570\u548c\u68af\u5ea6\uff0c\u4f46\u4f18\u5316\u5668\u72b6\u6001\u53ea\u6709 1/N_d \u7684\u5c0f\u5206\u7247](/images/zero-stage1-pos.png)

    \u6bcf\u5757 GPU \u5185\u5b58 = 2\u03a8 + 2\u03a8 + K\u00b7\u03a8/N_d
    K=12\u3001\u03a8=75\u4ebf\u3001N_d=64\uff1a\u2192 31.4 GB\uff08vs \u57fa\u51c6 120 GB\uff09

**\u901a\u4fe1**\uff1a\u4e0e\u666e\u901a DDP \u76f8\u540c\u2014\u2014\u68af\u5ea6\u505a\u4e00\u6b21 AllReduce\uff0c\u65e0\u989d\u5916\u5f00\u9500\u3002

**\u9002\u7528\u573a\u666f**\uff1a\u6a21\u578b\u80fd\u653e\u5165 GPU \u5185\u5b58\uff0c\u4f46\u9700\u8981\u66f4\u5927\u7684\u6279\u91cf\u5927\u5c0f\u7a7a\u95f4\u3002

---

## ZeRO Stage 2\uff1a\u68af\u5ea6 + \u4f18\u5316\u5668\u72b6\u6001\u5206\u7247\uff08P_os+g\uff09

**\u5206\u7247\u5185\u5bb9**\uff1a\u68af\u5ea6 + \u4f18\u5316\u5668\u72b6\u6001\u3002

\u53cd\u5411\u4f20\u64ad\u540e\uff0c\u6bcf\u4e2a\u68af\u5ea6\u901a\u8fc7 ReduceScatter \u53d1\u9001\u5230\u8d1f\u8d23\u8be5\u53c2\u6570\u5206\u7247\u7684 GPU\u3002\u8be5 GPU \u5728\u672c\u5730\u6267\u884c\u4f18\u5316\u5668\u66f4\u65b0\u3002\u4e0d\u5c5e\u4e8e\u81ea\u5df1\u5206\u7247\u7684\u68af\u5ea6\u7acb\u5373\u4e22\u5f03\u3002

![ZeRO Stage 2\uff1a\u6bcf\u5757 GPU \u6301\u6709\u5b8c\u6574\u53c2\u6570\uff0c\u4f46\u53ea\u6709 1/N_d \u7684\u68af\u5ea6\uff08\u6a59\u8272\uff09\u548c\u4f18\u5316\u5668\u72b6\u6001\uff08\u7eff\u8272\uff09](/images/zero-stage2-pos-g.png)

\u53cd\u5411\u4f20\u64ad\u671f\u95f4\uff0c\u68af\u5ea6\u901a\u8fc7 **ReduceScatter** \u800c\u975e AllReduce \u4f20\u8f93\u2014\u2014\u5c06\u6bcf\u4e2a\u68af\u5ea6\u5b9a\u5411\u4f20\u8f93\u5230\u8d1f\u8d23\u7684 GPU\uff1a

![Stage 2 \u53cd\u5411\u4f20\u64ad\uff1aReduceScatter \u5c06\u68af\u5ea6\u8def\u7531\u5230\u8d1f\u8d23\u7684 GPU \u5206\u7247\uff0c\u7136\u540e\u6bcf\u5757 GPU \u66f4\u65b0\u81ea\u5df1\u7684\u4f18\u5316\u5668\u5206\u7247](/images/zero-stage2-backward.png)

    \u6bcf\u5757 GPU \u5185\u5b58 = 2\u03a8 + (2+K)\u00b7\u03a8/N_d
    K=12\u3001\u03a8=75\u4ebf\u3001N_d=64\uff1a\u2192 16.6 GB

**\u901a\u4fe1**\uff1aReduceScatter\uff08\u603b\u6570\u636e\u91cf\u4e0e AllReduce \u76f8\u540c\uff0c\u53ea\u662f\u91cd\u65b0\u7ec4\u7ec7\uff09\u2014\u2014\u51e0\u4e4e\u6ca1\u6709\u989d\u5916\u5f00\u9500\u3002

---

## ZeRO Stage 3\uff1a\u5b8c\u6574\u5206\u7247\uff08P_os+g+p\uff09

**\u5206\u7247\u5185\u5bb9**\uff1a\u53c2\u6570 + \u68af\u5ea6 + \u4f18\u5316\u5668\u72b6\u6001\u2014\u2014**\u5168\u90e8\u5185\u5bb9**\u3002

\u6bcf\u5757 GPU \u53ea\u6301\u6709 **1/N_d** \u7684\u5168\u90e8\u6a21\u578b\u72b6\u6001\u3002\u53c2\u6570\u5728\u6bcf\u5c42\u8ba1\u7b97\u524d\u901a\u8fc7 AllGather \u6309\u9700\u83b7\u53d6\uff0c\u8ba1\u7b97\u540e\u7acb\u5373\u4e22\u5f03\u3002

### \u6df7\u5408\u7cbe\u5ea6\u5185\u5b58\u5e03\u5c40

![\u6bcf\u5757 GPU \u5185\u5b58\u5e03\u5c40\uff1a\u5404 GPU \u5206\u7247\u5305\u542b 1/N_d \u7684 FP16 \u53c2\u6570\u3001FP32 \u65b9\u5dee\u3001FP32 \u52a8\u91cf\u548c FP32 \u4e3b\u6743\u91cd](/images/zero-mixed-precision-layout.png)

\u6bcf\u5757 GPU \u7684\u5206\u7247\u5305\u542b\u5176\u53c2\u6570\u5206\u7247\u7684\u5168\u90e8\u56db\u4e2a\u7ec4\u6210\u90e8\u5206\uff1aFP16 \u5de5\u4f5c\u526f\u672c\u3001FP32 \u4e3b\u6743\u91cd\u3001FP32 \u52a8\u91cf\u3001FP32 \u65b9\u5dee\u2014\u2014\u53ea\u662f\u4ee5\u524d\u7684 1/N_d\u3002

### \u524d\u5411\u4f20\u64ad\uff1a\u6309\u9700 AllGather \u53c2\u6570

\u524d\u5411\u4f20\u64ad\u9010\u5c42\u8fdb\u884c\uff0c\u6bcf\u5757 GPU \u5e7f\u64ad\u81ea\u5df1\u7684\u53c2\u6570\u5206\u7247\uff0c\u4ee5\u4fbf\u6240\u6709 GPU \u80fd\u8ba1\u7b97\u8be5\u5c42\uff1a

![Stage 3 \u5b8c\u6574\u524d\u5411\uff1a\u901a\u8fc7 AllGather \u6bcf\u5757 GPU \u4e34\u65f6\u6301\u6709\u5f53\u524d\u5c42\u7684\u5b8c\u6574\u53c2\u6570\uff0c\u6700\u7ec8\u8ba1\u7b97\u51fa Loss](/images/zero-stage3-full-forward.png)

\u6bcf\u5c42\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c\u5b8c\u6574\u53c2\u6570\u7acb\u5373\u91ca\u653e\uff0c\u53ea\u4fdd\u7559\u81ea\u5df1\u7684\u5206\u7247\uff1a

![Stage 3 AllGather \u7ec6\u8282\uff1a\u6c47\u805a\u67d0\u5757 GPU \u7684\u5206\u7247\u91cd\u5efa\u5b8c\u6574\u5c42\uff0c\u4f7f\u7528\u540e\u7acb\u5373\u91ca\u653e\u2014\u2014\u4e0b\u4e00\u5c42\u91cd\u590d\u6b64\u8fc7\u7a0b](/images/zero-stage3-allgather.png)

### \u53cd\u5411\u4f20\u64ad\uff1a\u91cd\u65b0\u6c47\u805a\u53c2\u6570\u8ba1\u7b97\u68af\u5ea6

\u53cd\u5411\u4f20\u64ad\u65f6\uff0c\u518d\u6b21\u6c47\u805a\u53c2\u6570\uff08\u76f8\u540c\u7684 AllGather \u6a21\u5f0f\uff09\u4ee5\u8ba1\u7b97\u6bcf\u5c42\u7684\u68af\u5ea6\uff1a

![Stage 3 \u53cd\u5411\u4f20\u64ad\uff1a\u518d\u6b21 AllGather \u53c2\u6570\u4ee5\u8ba1\u7b97\u68af\u5ea6\u2014\u2014\u6bcf\u5757 GPU \u4e0a\u4e34\u65f6\u53ef\u89c1\u5b8c\u6574\u6a21\u578b](/images/zero-stage3-backward.png)

\u68af\u5ea6\u8ba1\u7b97\u5b8c\u6210\u540e\uff0c**ReduceScatter** \u5c06\u6bcf\u4e2a\u68af\u5ea6\u53d1\u9001\u56de\u8d1f\u8d23\u7684 GPU\u2014\u2014\u6bcf\u5757 GPU \u53ea\u4fdd\u7559\u81ea\u5df1\u7684\u68af\u5ea6\u5206\u7247\uff1a

![Stage 3 ReduceScatter\uff1a\u53cd\u5411\u4f20\u64ad\u540e\u5c06\u68af\u5ea6\u5206\u6563\u56de\u5404\u81ea\u7684 GPU \u5206\u7247\uff0c\u975e\u81ea\u6709\u90e8\u5206\u7acb\u5373\u4e22\u5f03](/images/zero-stage3-reduce-scatter.png)

    \u6bcf\u5757 GPU \u5185\u5b58 = (2+2+K)\u00b7\u03a8 / N_d
    K=12\u3001\u03a8=75\u4ebf\u3001N_d=64\uff1a\u2192 1.9 GB

**\u901a\u4fe1\u5f00\u9500**\uff1a\u7ea6\u4e3a AllReduce \u7684 1.5 \u500d\u2014\u2014\u53c2\u6570\u7684\u989d\u5916 AllGather \u589e\u52a0\u4e86\u7ea6 50% \u7684\u901a\u4fe1\u91cf\u3002\u5bf9\u4e8e\u5355\u5757 GPU \u653e\u4e0d\u4e0b\u7684\u6a21\u578b\uff0c\u5b8c\u5168\u503c\u5f97\u3002

\`\`\`python
# \u4f7f\u7528 DeepSpeed \u914d\u7f6e ZeRO Stage 3
ds_config = {
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {"device": "cpu"},  # \u53ef\u9009\uff1a\u5378\u8f7d\u5230 CPU
        "offload_param": {"device": "cpu"},       # \u53ef\u9009\uff1a\u53c2\u6570\u5378\u8f7d\u5230 CPU
    },
    "bf16": {"enabled": True}
}

model_engine, optimizer, _, _ = deepspeed.initialize(
    model=model,
    config=ds_config
)
\`\`\`

---

## ZeRO-Offload\uff1a\u7528 CPU \u4f5c\u4e3a\u6ea2\u51fa\u5185\u5b58

ZeRO-Offload \u901a\u8fc7\u5c06\u4f18\u5316\u5668\u72b6\u6001\uff08\u53ef\u9009\u53c2\u6570\uff09\u8f6c\u79fb\u5230 **CPU \u5185\u5b58**\uff0c\u6269\u5c55\u4e86 Stage 2/3\uff1a

- GPU \u8d1f\u8d23\u524d\u5411/\u53cd\u5411\u8ba1\u7b97\uff08\u5feb\uff09
- CPU \u8d1f\u8d23 Adam \u66f4\u65b0\uff08\u6162\uff0c\u4f46\u4e0e GPU \u8ba1\u7b97\u5e76\u884c\u6267\u884c\uff09

    \u5e26\u5bbd\u5bf9\u6bd4\uff1a
    GPU HBM\uff1a          2\u20134 TB/s
    NVLink\uff08GPU \u95f4\uff09\uff1a  600\u2013900 GB/s
    PCIe\uff08CPU\u2194GPU\uff09\uff1a  \u7ea6 32 GB/s
    NVMe SSD\uff1a         \u7ea6 7 GB/s

\u5355\u5757 80 GB GPU \u914d\u5408 ZeRO-Offload + NVMe\uff08ZeRO-Infinity\uff09\uff0c\u7406\u8bba\u4e0a\u53ef\u8bad\u7ec3\u8fdc\u8d85\u5176\u663e\u5b58\u5bb9\u91cf\u7684\u6a21\u578b\u2014\u2014\u4ee3\u4ef7\u662f\u8bad\u7ec3\u541e\u5410\u91cf\u5927\u5e45\u964d\u4f4e\u3002

---

## ZeRO \u5404\u9636\u6bb5\u603b\u7ed3

| \u9636\u6bb5 | \u5206\u7247\u5185\u5bb9 | \u6bcf\u5757 GPU \u5185\u5b58 | vs DDP \u901a\u4fe1\u91cf |
|------|---------|-------------|-------------|
| DDP\uff08\u57fa\u51c6\uff09| \u65e0 | (2+2+K)\u03a8 = **120 GB** | 1\u00d7 AllReduce |
| ZeRO-1 (P_os) | \u4f18\u5316\u5668\u72b6\u6001 | 2\u03a8+2\u03a8+K\u03a8/N_d = **31.4 GB** | 1\u00d7 AllReduce |
| ZeRO-2 (P_os+g) | \u4f18\u5316\u5668 + \u68af\u5ea6 | 2\u03a8+(2+K)\u03a8/N_d = **16.6 GB** | 1\u00d7 ReduceScatter + AllGather |
| ZeRO-3 (P_os+g+p) | \u5168\u90e8 | (2+2+K)\u03a8/N_d = **1.9 GB** | ~1.5\u00d7 AllReduce |
| ZeRO-Offload | + CPU \u5378\u8f7d | GPU\uff1a\u4ec5\u6d3b\u52a8\u5206\u7247 | + PCIe \u5f00\u9500 |

*(\u6570\u5b57\u57fa\u4e8e \u03a8=75\u4ebf\u3001N_d=64\u3001K=12)*

## \u5982\u4f55\u9009\u62e9\u9636\u6bb5

- **ZeRO-1**\uff1a\u6a21\u578b\u80fd\u653e\u5165 GPU\uff0c\u9700\u8981\u66f4\u591a\u6279\u91cf\u5927\u5c0f\u7a7a\u95f4\u2014\u2014\u5f00\u9500\u6700\u5c0f
- **ZeRO-2**\uff1a\u6a21\u578b\u52c9\u5f3a\u653e\u5f97\u4e0b\uff0c\u9700\u8981\u91ca\u653e\u68af\u5ea6\u5185\u5b58\u2014\u2014\u51e0\u4e4e\u65e0\u989d\u5916\u5f00\u9500
- **ZeRO-3 / FSDP**\uff1a\u6a21\u578b\u8d85\u51fa\u5355\u5757 GPU \u5bb9\u91cf\u2014\u2014\u5b9e\u73b0\u4efb\u610f\u89c4\u6a21\u6269\u5c55
- **ZeRO-Offload**\uff1aGPU \u6570\u91cf\u6709\u9650\uff0c\u613f\u610f\u4ee5\u901f\u5ea6\u6362\u5bb9\u91cf

ZeRO \u53ef\u4ee5\u8bf4\u662f\u5b9e\u9645\u5927\u6a21\u578b\u8bad\u7ec3\u4e2d\u5f71\u54cd\u6700\u6df1\u8fdc\u7684\u5355\u4e00\u6280\u672f\u2014\u2014\u5b83\u4f7f\u5728\u666e\u901a GPU \u96c6\u7fa4\u4e0a\u8bad\u7ec3 700 \u4ebf\u53c2\u6570\u4ee5\u4e0a\u7684\u6a21\u578b\u6210\u4e3a\u53ef\u80fd\u3002`
  }
}


export const distributedCommunication: TopicContent = {
  id: 'distributed-communication',
  title: { en: 'Distributed Communication Optimization', zh: '分布式通信优化' },
  contentType: 'article',
  content: {
    en: `## Communication as the Bottleneck

As we scale distributed training to hundreds or thousands of GPUs, **communication overhead** — not computation — becomes the limiting factor. A training run with 95% GPU compute efficiency can be wrecked by 30% idle time waiting for gradient synchronization.

Understanding and optimizing distributed communication is what separates a 40% MFU training run from a 55% MFU one.

---

## The Roofline Model: Compute vs. Communication

Every distributed training step has two resources to balance:

\`\`\`
Step time = max(compute_time, communication_time)
\`\`\`

If compute >> communication → communication is hidden (ideal)
If communication >> compute → GPUs wait for sync → wasted time

For AllReduce of gradient tensor G across N GPUs:
\`\`\`
Ring-AllReduce time ≈ 2(N-1)/N × |G| / bandwidth
\`\`\`

For LLaMA-2 70B with TP=8 on H100 NVLink cluster:
- Gradient size per layer: ~millions of parameters × 4 bytes
- NVLink bandwidth: 900 GB/s
- Communication overlapped with backward → hidden

For inter-node InfiniBand (50 GB/s per port):
- Same gradient size takes 18x longer
- Gradient compression and overlap become critical

---

## Technique 1: Overlapping Communication with Computation

![Ring-AllReduce: gradients flow around a ring of GPUs, each contributing ΔW](/images/dist-comm-ring-allreduce.png)

The single most impactful optimization: **start gradient AllReduce before the backward pass finishes**.

DDP does this automatically with "bucket" AllReduce:

\`\`\`
Backward pass (LIFO layer order):
  Layer 32 backward → gradient ready → AllReduce bucket fills → send
  Layer 31 backward → gradient ready → continue filling bucket
  ...
  Layer 1 backward → final gradient → final AllReduce
\`\`\`

\`\`\`python
# DDP bucket size controls overlap granularity
model = DDP(model, bucket_cap_mb=25)  # Default: 25 MB per bucket
# Larger bucket → less communication ops but less overlap
# Smaller bucket → more ops but better overlap
\`\`\`

**Pipeline parallelism overlap**: Compute forward for micro-batch i+1 while sending activations for micro-batch i. Megatron's interleaved 1F1B schedule is specifically designed to maximize this.

---

## Technique 2: Gradient Compression

Reduce the volume of data communicated:

### Gradient Quantization

Quantize gradients from FP32 (4 bytes/param) to FP16 (2 bytes) or INT8 (1 byte) before AllReduce:

\`\`\`
Bandwidth reduction: 2–4x
Accuracy impact: Small if done carefully with error feedback
\`\`\`

**Error feedback** (also called gradient accumulation with quantization): Store the quantization error and add it to the next gradient before quantization. This prevents systematic bias.

### Top-K Sparsification

Only transmit the top-K% of gradients by absolute magnitude:

\`\`\`
If K=1%: 100x bandwidth reduction
Accuracy: Surprisingly robust with error feedback
Implementation: Sort + mask → sparse communication
\`\`\`

Popular in federated learning; less common in dense GPU cluster training due to index overhead.

### PowerSGD (Low-Rank Gradient Compression)

Approximate the gradient matrix G as a low-rank factorization: G ≈ P × Q^T

\`\`\`
G is (m × n) → P is (m × r), Q is (n × r) where r << min(m, n)
Compression ratio: (m × n) / (r × (m + n)) = up to 60x for large matrices
\`\`\`

PyTorch implements this as a communication hook:
\`\`\`python
from torch.distributed.algorithms.ddp_comm_hooks import powerSGD_hook

state = powerSGD.PowerSGDState(process_group=None, matrix_approximation_rank=1)
model.register_comm_hook(state, powerSGD.powerSGD_hook)
\`\`\`

---

## Technique 3: Topology-Aware AllReduce

Standard Ring-AllReduce treats all GPUs equally. But real clusters have a hierarchy:

\`\`\`
Node 0: [GPU 0, GPU 1, GPU 2, GPU 3] ← NVLink (900 GB/s)
                    ↕
Node 1: [GPU 4, GPU 5, GPU 6, GPU 7] ← InfiniBand (50 GB/s)
\`\`\`

**Hierarchical AllReduce**:
1. Within each node: AllReduce over NVLink (fast)
2. Between nodes: AllReduce over InfiniBand (slow, but only 1/N the data from step 1)

NCCL automatically detects topology and uses this pattern. But you can also configure it explicitly:

\`\`\`bash
NCCL_ALGO=TREE  # Tree algorithm (good for many nodes)
NCCL_ALGO=RING  # Ring algorithm (good for few nodes, high bandwidth)
\`\`\`

---

## Technique 4: Communication Scheduling

Order operations to minimize idle time:

### Gradient Bucketing Strategy

Too-small buckets → too many AllReduce ops, overhead dominates.
Too-large buckets → long wait before first communication, poor overlap.

Optimal: Tune \`bucket_cap_mb\` empirically. For LLMs, 25–100 MB typically works well.

### Prioritizing Small Tensors

Small tensors (biases, LayerNorm params) complete AllReduce quickly. Fusing them into larger buckets or processing them separately can improve scheduling efficiency.

---

## Technique 5: Gradient Accumulation as Communication Reduction

Increase micro-batch size and accumulate gradients for K steps before syncing:

\`\`\`python
accumulation_steps = 8

for i, batch in enumerate(dataloader):
    with model.no_sync() if (i + 1) % accumulation_steps != 0 else nullcontext():
        loss = model(batch) / accumulation_steps
        loss.backward()  # No AllReduce for K-1 steps

    if (i + 1) % accumulation_steps == 0:
        optimizer.step()  # AllReduce happens here
        optimizer.zero_grad()
\`\`\`

**Effect**: Reduces AllReduce frequency by K×, at the cost of K× larger effective batch size. For most LLM training, K = 4–16 is common.

---

## Technique 6: Async Communication (Gradient Offloading)

ZeRO-2+ can offload optimizer step to CPU asynchronously while GPU computes next batch's forward pass:

\`\`\`
GPU: Compute forward batch N+1
CPU: Apply Adam update for batch N (asynchronously)
GPU: Sync updated weights when needed
\`\`\`

This hides the optimizer step latency but requires careful synchronization to avoid stale weights.

---

## Practical NCCL Tuning

![NCCL: single GPU → multi-GPU, multi-node collective communication](/images/dist-comm-nccl.png)

Key environment variables for NCCL performance:

\`\`\`bash
# Prefer P2P (NVLink) for intra-node
NCCL_P2P_DISABLE=0

# Socket buffer sizes for InfiniBand
NCCL_SOCKET_IFNAME=ib0  # Select the right IB interface

# Tree or ring algorithm selection
NCCL_ALGO=TREE  # Better for large number of nodes

# Enable RDMA for InfiniBand
NCCL_IB_HCA=mlx5_0  # Specify IB adapter

# Debug communication issues
NCCL_DEBUG=INFO
NCCL_DEBUG_SUBSYS=COLL  # Log collective operations
\`\`\`

---

## Communication Optimization Summary

| Technique | Bandwidth Reduction | Compute Overhead | Best For |
|-----------|--------------------|-----------------|---------|
| Overlap (DDP buckets) | None | None | All DDP training |
| Gradient quantization | 2–4x | Small | Inter-node training |
| PowerSGD | 10–60x | Medium | Large gradient matrices |
| Hierarchical AllReduce | 2–4x | None | Multi-node clusters |
| Gradient accumulation | K× | None | All distributed training |

In production LLM training, all of these techniques are applied simultaneously. The difference between a well-tuned and poorly-tuned distributed setup can easily be **2× in overall throughput**.`,
    zh: `## 通信成为瓶颈

随着分布式训练扩展到数百甚至数千块 GPU，**通信开销**——而非计算——成为限制因素。一个 GPU 计算效率为 95% 的训练任务，可能因等待梯度同步而有 30% 的空闲时间，效率大打折扣。

理解并优化分布式通信，是将 40% MFU 的训练提升至 55% MFU 的关键所在。

---

## Roofline 模型：计算 vs 通信

每个分布式训练步骤需要平衡两种资源：

\`\`\`
每步时间 = max(计算时间, 通信时间)
\`\`\`

如果计算 >> 通信 → 通信被隐藏（理想状态）
如果通信 >> 计算 → GPU 等待同步 → 时间浪费

N 块 GPU 之间对梯度张量 G 进行 AllReduce：
\`\`\`
Ring-AllReduce 时间 ≈ 2(N-1)/N × |G| / 带宽
\`\`\`

LLaMA-2 70B 在 H100 NVLink 集群上（TP=8）：
- 每层梯度大小：数百万参数 × 4 字节
- NVLink 带宽：900 GB/s
- 通信与反向传播重叠 → 被隐藏

对于节点间 InfiniBand（每端口 50 GB/s）：
- 相同梯度大小需要 18 倍时间
- 梯度压缩和重叠变得至关重要

---

## 技术一：通信与计算重叠

![Ring-AllReduce：梯度沿 GPU 环形传递，每块 GPU 贡献 ΔW](/images/dist-comm-ring-allreduce.png)

影响最大的单一优化：**在反向传播完成之前就开始梯度 AllReduce**。

DDP 通过"桶"式 AllReduce 自动实现这一点：

\`\`\`
反向传播（后进先出顺序）：
  第 32 层反向 → 梯度就绪 → AllReduce 桶填充 → 发送
  第 31 层反向 → 梯度就绪 → 继续填充桶
  ...
  第 1 层反向 → 最终梯度 → 最终 AllReduce
\`\`\`

\`\`\`python
# DDP 桶大小控制重叠粒度
model = DDP(model, bucket_cap_mb=25)  # 默认：每桶 25 MB
# 桶越大 → 通信操作越少，但重叠越少
# 桶越小 → 操作越多，但重叠越好
\`\`\`

**流水线并行重叠**：在发送微批次 i 的激活值的同时计算微批次 i+1 的前向传播。Megatron 的交错 1F1B 调度正是为最大化这种重叠而设计的。

---

## 技术二：梯度压缩

减少通信的数据量：

### 梯度量化

在 AllReduce 前将梯度从 FP32（4 字节/参数）量化为 FP16（2 字节）或 INT8（1 字节）：

\`\`\`
带宽减少：2–4 倍
精度影响：配合误差反馈时影响较小
\`\`\`

**误差反馈**：存储量化误差，在下一次量化前加回梯度。这防止了系统性偏差。

### Top-K 稀疏化

只传输绝对值最大的 Top-K% 梯度：

\`\`\`
K=1%：带宽减少 100 倍
精度：配合误差反馈出奇地鲁棒
实现：排序 + 掩码 → 稀疏通信
\`\`\`

在联邦学习中常用；在密集 GPU 集群训练中因索引开销而不那么常见。

### PowerSGD（低秩梯度压缩）

将梯度矩阵 G 近似为低秩分解：G ≈ P × Q^T

\`\`\`
G 的形状为 (m × n) → P 为 (m × r)，Q 为 (n × r)，其中 r << min(m, n)
压缩比：(m × n) / (r × (m + n)) = 对大矩阵可达 60 倍
\`\`\`

PyTorch 通过通信钩子实现：
\`\`\`python
from torch.distributed.algorithms.ddp_comm_hooks import powerSGD_hook

state = powerSGD.PowerSGDState(process_group=None, matrix_approximation_rank=1)
model.register_comm_hook(state, powerSGD.powerSGD_hook)
\`\`\`

---

## 技术三：拓扑感知的 AllReduce

标准 Ring-AllReduce 平等对待所有 GPU。但真实集群存在层次结构：

\`\`\`
节点 0: [GPU 0, GPU 1, GPU 2, GPU 3] ← NVLink (900 GB/s)
                    ↕
节点 1: [GPU 4, GPU 5, GPU 6, GPU 7] ← InfiniBand (50 GB/s)
\`\`\`

**层次化 AllReduce**：
1. 节点内：通过 NVLink 进行 AllReduce（快）
2. 节点间：通过 InfiniBand 进行 AllReduce（慢，但数据量只有步骤 1 的 1/N）

NCCL 自动检测拓扑并使用此模式。也可以通过环境变量显式配置。

---

## 技术四：梯度累积作为通信减少手段

增大微批次大小，累积 K 步梯度后再同步：

\`\`\`python
accumulation_steps = 8

for i, batch in enumerate(dataloader):
    with model.no_sync() if (i + 1) % accumulation_steps != 0 else nullcontext():
        loss = model(batch) / accumulation_steps
        loss.backward()  # K-1 步不进行 AllReduce

    if (i + 1) % accumulation_steps == 0:
        optimizer.step()  # 此处发生 AllReduce
        optimizer.zero_grad()
\`\`\`

**效果**：AllReduce 频率降低 K 倍，代价是有效批量大小增大 K 倍。对于大多数大模型训练，K = 4–16 较为常见。

---

## 实际 NCCL 调优

![NCCL：单 GPU 扩展至多 GPU、多节点集体通信](/images/dist-comm-nccl.png)

NCCL 性能的关键环境变量：

\`\`\`bash
# 优先使用 P2P（NVLink）进行节点内通信
NCCL_P2P_DISABLE=0

# 选择正确的 IB 接口
NCCL_SOCKET_IFNAME=ib0

# 算法选择
NCCL_ALGO=TREE  # 对大量节点效果更好

# 调试通信问题
NCCL_DEBUG=INFO
NCCL_DEBUG_SUBSYS=COLL  # 记录集体通信操作
\`\`\`

---

## 通信优化总结

| 技术 | 带宽减少 | 计算开销 | 最适合 |
|------|---------|---------|-------|
| 重叠（DDP 桶）| 无 | 无 | 所有 DDP 训练 |
| 梯度量化 | 2–4 倍 | 小 | 节点间训练 |
| PowerSGD | 10–60 倍 | 中等 | 大梯度矩阵 |
| 层次化 AllReduce | 2–4 倍 | 无 | 多节点集群 |
| 梯度累积 | K 倍 | 无 | 所有分布式训练 |

在生产大模型训练中，所有这些技术同时应用。调优良好与调优不足的分布式配置之间，总吞吐量可以相差 **2 倍以上**。`
  }
}

export const distributedFramework: TopicContent = {
  id: 'distributed-framework',
  title: { en: 'Distributed Training Frameworks', zh: '大模型分布式训练框架' },
  contentType: 'article',
  content: {
    en: `## The Framework Landscape

Training a 70B+ LLM requires orchestrating data parallelism, model parallelism, optimizer sharding, mixed precision, checkpointing, and monitoring — all simultaneously. No one writes this from scratch. The major distributed training frameworks handle this complexity.

The key players:
- **Megatron-LM** (NVIDIA): Tensor + Pipeline parallelism specialist
- **DeepSpeed** (Microsoft): ZeRO optimizer + memory efficiency
- **PyTorch FSDP**: Native ZeRO-3 in PyTorch
- **Megatron-DeepSpeed**: Combined stack used by most frontier labs
- **JAX + T5X / Flax**: Google's stack for TPUs
- **Alpa**: Automated parallelism (research)

---

## Megatron-LM

![NVIDIA Megatron-LM — ongoing research training transformer models at scale](/images/framework-megatron.png)

Developed by NVIDIA Research, Megatron-LM is the gold standard for **tensor and pipeline parallelism**.

### Key Innovations

**1. Tensor Parallelism Implementation**

Megatron introduced efficient column + row parallel linear layers for transformer blocks, requiring only one AllReduce per transformer layer (vs. naive approaches requiring one per matmul).

**2. Pipeline Parallelism with 1F1B**

The interleaved 1F1B (one forward / one backward) schedule minimizes pipeline bubble while keeping activation memory manageable.

**3. Sequence Parallelism**

Extends tensor parallelism to LayerNorm and Dropout operations by distributing the sequence dimension, further reducing activation memory.

**4. Flash Attention Integration**

Native integration with FlashAttention-2 for memory-efficient attention computation.

### Configuration Example

\`\`\`bash
# Launch LLaMA-2 70B training with Megatron
torchrun --nproc_per_node=8 pretrain_llama.py \\
  --tensor-model-parallel-size 4 \\     # TP=4 (within node)
  --pipeline-model-parallel-size 2 \\   # PP=2 (across nodes)
  --num-layers 80 \\
  --hidden-size 8192 \\
  --num-attention-heads 64 \\
  --seq-length 4096 \\
  --micro-batch-size 1 \\
  --global-batch-size 1024 \\
  --bf16
\`\`\`

### Who Uses Megatron

NVIDIA (Nemotron), Microsoft (Phi), many academic labs. Often used as the TP/PP layer on top of DeepSpeed.

---

## DeepSpeed

![Microsoft DeepSpeed](/images/framework-deepspeed.png)

Microsoft's DeepSpeed focuses on **memory efficiency** through the ZeRO optimizer family.

### Core Features

**ZeRO-1/2/3**: As covered in the ZeRO chapter — optimizer state, gradient, and parameter sharding.

**ZeRO-Offload / ZeRO-Infinity**: CPU and NVMe offloading for training models beyond GPU memory limits.

**DeepSpeed-MoE**: Efficient training and inference for Mixture-of-Experts models.

**DeepSpeed-Chat**: Full RLHF (Reinforcement Learning from Human Feedback) pipeline including SFT, reward model training, and PPO.

**Curriculum Learning**: Progressive sequence length training to speed up convergence.

### Configuration (ds_config.json)

\`\`\`json
{
  "train_batch_size": 1024,
  "gradient_accumulation_steps": 4,
  "bf16": { "enabled": true },
  "zero_optimization": {
    "stage": 3,
    "allgather_partitions": true,
    "reduce_scatter": true,
    "overlap_comm": true,
    "contiguous_gradients": true,
    "offload_optimizer": {
      "device": "cpu",
      "pin_memory": true
    }
  },
  "gradient_clipping": 1.0,
  "steps_per_print": 100
}
\`\`\`

\`\`\`python
import deepspeed

model_engine, optimizer, _, _ = deepspeed.initialize(
    model=model,
    config="ds_config.json",
    model_parameters=model.parameters()
)

for batch in dataloader:
    outputs = model_engine(batch)
    loss = criterion(outputs)
    model_engine.backward(loss)
    model_engine.step()
\`\`\`

---

## Megatron-DeepSpeed: The Production Stack

The most common setup for frontier model training combines Megatron's 3D parallelism with DeepSpeed's ZeRO:

\`\`\`
┌─────────────────────────────────┐
│  Data Parallelism (DeepSpeed ZeRO) │  ← Outer loop
├─────────────────────────────────┤
│  Pipeline Parallelism (Megatron) │  ← Across nodes
├─────────────────────────────────┤
│  Tensor Parallelism (Megatron)   │  ← Within nodes
└─────────────────────────────────┘
\`\`\`

This combination trained:
- GPT-NeoX 20B (EleutherAI)
- Falcon 40B/180B (TII)
- Llama 2 (Meta — with their own adaptations)

---

## PyTorch FSDP

![PyTorch](/images/framework-pytorch.png)

PyTorch's native Fully Sharded Data Parallel is the recommended path for ZeRO-3 without DeepSpeed dependency.

### Key Advantages Over DeepSpeed ZeRO-3

- **Tighter PyTorch integration**: No separate config system, better debugging tools
- **Mixed precision control**: Fine-grained per-module precision policies
- **Activation checkpointing**: Native integration with \`torch.utils.checkpoint\`
- **Better ecosystem compatibility**: Works seamlessly with torch.compile, torchao

### Practical FSDP Setup for LLMs

\`\`\`python
from torch.distributed.fsdp import (
    FullyShardedDataParallel as FSDP,
    ShardingStrategy,
    MixedPrecision,
)
from torch.distributed.fsdp.wrap import transformer_auto_wrap_policy
from torch.distributed.algorithms._checkpoint.checkpoint_wrapper import (
    checkpoint_wrapper, CheckpointImpl
)

# Apply activation checkpointing to each transformer block
def apply_activation_checkpointing(model):
    check_fn = lambda submodule: isinstance(submodule, TransformerBlock)
    apply_activation_checkpointing(
        model,
        checkpoint_wrapper_fn=checkpoint_wrapper,
        check_fn=check_fn,
    )

# FSDP wrapping policy
auto_wrap_policy = transformer_auto_wrap_policy(
    transformer_layer_cls={TransformerBlock}
)

# Mixed precision policy
mp_policy = MixedPrecision(
    param_dtype=torch.bfloat16,   # Sharded params in BF16
    reduce_dtype=torch.float32,   # Gradient reduction in FP32
    buffer_dtype=torch.bfloat16,  # Buffers in BF16
)

model = FSDP(
    model,
    auto_wrap_policy=auto_wrap_policy,
    mixed_precision=mp_policy,
    sharding_strategy=ShardingStrategy.FULL_SHARD,  # ZeRO-3
    device_id=local_rank,
    use_orig_params=True,  # Required for torch.compile
)
\`\`\`

**Who uses FSDP**: Meta (Llama 3 training), Google (some internal models), most PyTorch-native practitioners.

---

## JAX + Flax / MaxText (Google's Stack)

![JAX](/images/framework-jax.png)

For TPU training, Google's preferred stack is JAX-based:

- **JAX**: JIT compilation via XLA, functional transforms (jit, vmap, pmap, grad)
- **Flax**: Neural network library on top of JAX
- **MaxText**: Google's open-source LLM training code for TPU Pods
- **T5X**: Production training framework for T5-family models

\`\`\`python
# JAX data parallelism via pmap
import jax
import jax.numpy as jnp
from jax import pmap

# Replicate across all TPU cores
replicated_params = jax.device_put_replicated(params, jax.devices())

@pmap
def train_step(params, batch):
    loss, grads = jax.value_and_grad(loss_fn)(params, batch)
    # pmap automatically AllReduces grads across devices
    return loss, grads
\`\`\`

JAX's functional programming model makes it elegant for research but has a steeper learning curve than PyTorch.

---

## Framework Comparison

| Framework | Parallelism | Memory | Ecosystem | Best For |
|-----------|------------|--------|-----------|---------|
| Megatron-LM | TP + PP + SP | Moderate | NVIDIA | Largest models |
| DeepSpeed | ZeRO 1/2/3 + Offload | Excellent | Mixed | Memory-constrained |
| PyTorch FSDP | ZeRO-3 | Excellent | Pure PyTorch | PyTorch-native |
| Megatron-DeepSpeed | 3D + ZeRO | Best | Mixed | Frontier training |
| JAX/MaxText | All | Good | Google | TPU + research |

---

## Choosing Your Stack

**For most practitioners (multi-GPU, < 70B parameters)**:
→ PyTorch + FSDP + torchrun. Native, well-documented, sufficient.

**For 70B+ models on GPU clusters**:
→ Megatron-LM for TP/PP + DeepSpeed ZeRO-3 for memory. Or FSDP if staying PyTorch-native.

**For TPU training**:
→ JAX + MaxText. Required if using Google Cloud TPUs at scale.

**For research / fine-tuning**:
→ HuggingFace Accelerate (abstracts over FSDP/DeepSpeed), simplifies code at the cost of some control.

The right framework is the one your team knows and can debug — operational excellence matters as much as raw performance.`,
    zh: `## 框架全景

训练 700 亿参数以上的大模型需要同时协调数据并行、模型并行、优化器分片、混合精度、检查点和监控——这一切缺一不可。没有人会从头编写这些代码。主流分布式训练框架来处理这种复杂性。

主要玩家：
- **Megatron-LM**（NVIDIA）：张量并行 + 流水线并行专家
- **DeepSpeed**（微软）：ZeRO 优化器 + 内存效率
- **PyTorch FSDP**：PyTorch 原生 ZeRO-3
- **Megatron-DeepSpeed**：大多数前沿实验室使用的组合技术栈
- **JAX + T5X / Flax**：Google 的 TPU 技术栈
- **Alpa**：自动化并行策略（研究方向）

---

## Megatron-LM

![NVIDIA Megatron-LM — 大规模 Transformer 模型训练研究框架](/images/framework-megatron.png)

由 NVIDIA Research 开发，Megatron-LM 是**张量并行和流水线并行**的黄金标准。

### 核心创新

**1. 张量并行实现**

Megatron 引入了高效的列并行 + 行并行线性层，每个 Transformer 层只需一次 AllReduce（而朴素实现每次矩阵乘法都需要一次）。

**2. 1F1B 流水线并行调度**

交错 1F1B（一次前向 / 一次反向）调度在控制激活值内存的同时最小化流水线气泡。

**3. 序列并行**

通过分配序列维度将张量并行扩展到 LayerNorm 和 Dropout 操作，进一步减少激活值内存。

**4. Flash Attention 集成**

与 FlashAttention-2 的原生集成，实现内存高效的注意力计算。

### 使用 Megatron 的机构

NVIDIA（Nemotron）、微软（Phi）、众多学术实验室。通常作为 TP/PP 层与 DeepSpeed 配合使用。

---

## DeepSpeed

![Microsoft DeepSpeed](/images/framework-deepspeed.png)

微软的 DeepSpeed 通过 ZeRO 优化器家族专注于**内存效率**。

### 核心特性

**ZeRO-1/2/3**：如 ZeRO 章节所述——优化器状态、梯度和参数分片。

**ZeRO-Offload / ZeRO-Infinity**：CPU 和 NVMe 卸载，训练超出 GPU 内存限制的模型。

**DeepSpeed-MoE**：混合专家（MoE）模型的高效训练和推理。

**DeepSpeed-Chat**：完整的 RLHF（基于人类反馈的强化学习）流水线，包括 SFT、奖励模型训练和 PPO。

**课程学习**：渐进式序列长度训练，加速收敛。

### 配置示例（ds_config.json）

\`\`\`json
{
  "train_batch_size": 1024,
  "gradient_accumulation_steps": 4,
  "bf16": { "enabled": true },
  "zero_optimization": {
    "stage": 3,
    "allgather_partitions": true,
    "reduce_scatter": true,
    "overlap_comm": true,
    "contiguous_gradients": true,
    "offload_optimizer": {
      "device": "cpu",
      "pin_memory": true
    }
  },
  "gradient_clipping": 1.0,
  "steps_per_print": 100
}
\`\`\`

---

## Megatron-DeepSpeed：生产级技术栈

前沿模型训练最常见的配置将 Megatron 的 3D 并行与 DeepSpeed 的 ZeRO 相结合：

\`\`\`
┌─────────────────────────────────┐
│  数据并行（DeepSpeed ZeRO）        │  ← 外层循环
├─────────────────────────────────┤
│  流水线并行（Megatron）            │  ← 跨节点
├─────────────────────────────────┤
│  张量并行（Megatron）             │  ← 节点内
└─────────────────────────────────┘
\`\`\`

这种组合训练了：
- GPT-NeoX 20B（EleutherAI）
- Falcon 40B/180B（TII）
- Llama 2（Meta——有自己的适配）

---

## PyTorch FSDP

![PyTorch](/images/framework-pytorch.png)

PyTorch 的原生全分片数据并行是无需 DeepSpeed 依赖即可实现 ZeRO-3 的推荐路径。

### 相比 DeepSpeed ZeRO-3 的优势

- **更紧密的 PyTorch 集成**：无需单独的配置系统，调试工具更好
- **混合精度控制**：细粒度的按模块精度策略
- **激活值重计算**：与 \`torch.utils.checkpoint\` 的原生集成
- **更好的生态兼容性**：与 torch.compile、torchao 无缝协作

**使用 FSDP 的机构**：Meta（Llama 3 训练）、Google（部分内部模型）、大多数 PyTorch 原生从业者。

---

## JAX + Flax / MaxText（Google 技术栈）

![JAX](/images/framework-jax.png)

对于 TPU 训练，Google 首选基于 JAX 的技术栈：

- **JAX**：通过 XLA 进行 JIT 编译，函数式变换（jit, vmap, pmap, grad）
- **Flax**：基于 JAX 的神经网络库
- **MaxText**：Google 为 TPU Pod 开源的大模型训练代码
- **T5X**：T5 家族模型的生产训练框架

JAX 的函数式编程模型使其在研究上优雅，但学习曲线比 PyTorch 更陡峭。

---

## 框架对比

| 框架 | 并行策略 | 内存效率 | 生态 | 最适合 |
|------|---------|---------|------|-------|
| Megatron-LM | TP + PP + SP | 中等 | NVIDIA | 最大规模模型 |
| DeepSpeed | ZeRO 1/2/3 + 卸载 | 优秀 | 混合 | 内存受限场景 |
| PyTorch FSDP | ZeRO-3 | 优秀 | 纯 PyTorch | PyTorch 原生 |
| Megatron-DeepSpeed | 3D + ZeRO | 最佳 | 混合 | 前沿模型训练 |
| JAX/MaxText | 全部 | 良好 | Google | TPU + 研究 |

---

## 选择你的技术栈

**大多数从业者（多 GPU，< 700 亿参数）**：
→ PyTorch + FSDP + torchrun。原生、文档完善、足够用。

**700 亿参数以上模型在 GPU 集群上**：
→ Megatron-LM 负责 TP/PP + DeepSpeed ZeRO-3 负责内存。或者，如果保持 PyTorch 原生则用 FSDP。

**TPU 训练**：
→ JAX + MaxText。在 Google Cloud 大规模 TPU 上必选。

**研究 / 微调**：
→ HuggingFace Accelerate（在 FSDP/DeepSpeed 之上做了抽象），以牺牲部分控制权为代价简化代码。

最好的框架，是你的团队熟悉且能够调试的框架——工程运营能力与原始性能同等重要。`
  }
}
