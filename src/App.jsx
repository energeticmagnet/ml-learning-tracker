import { useState, useEffect } from "react";

const phases = [
  {
    id: 1, title: "Фундамент", emoji: "🧱", days: "1–30",
    color: "#6366f1", bg: "#eef2ff", border: "#c7d2fe",
    weeks: [
      {
        label: "Недели 1–2 · Дни 1–14", subtitle: "Python с нуля до уверенного уровня",
        items: [
          { id: "1-1", day: "1–3", text: "CS50P — установка, типы данных, условия, циклы" },
          { id: "1-2", day: "4–6", text: "Функции, списки, словари, множества. Практика: 10 задач на Leetcode Easy" },
          { id: "1-3", day: "7–9", text: "ООП: классы, наследование, dunder-методы. Практика: класс «Студент»" },
          { id: "1-4", day: "10–11", text: "Работа с файлами, исключения, модули. Практика: парсинг CSV" },
          { id: "1-5", day: "12–14", text: "NumPy — массивы, broadcasting, операции. Мини-проект: статистика по датасету" },
        ],
      },
      {
        label: "Недели 3–4 · Дни 15–30", subtitle: "Pandas + визуализация + математика",
        items: [
          { id: "1-6", day: "15–18", text: "Pandas: DataFrame, Series, groupby, merge, pivot. Анализ Titanic dataset" },
          { id: "1-7", day: "19–21", text: "Matplotlib + Seaborn: графики, heatmap, boxplot, pairplot" },
          { id: "1-8", day: "22–25", text: "Линейная алгебра: векторы, матрицы, умножение (Khan Academy + 3Blue1Brown)" },
          { id: "1-9", day: "26–28", text: "Статистика: среднее, дисперсия, распределения, p-value, корреляция" },
          { id: "1-10", day: "29–30", text: "Мини-проект: полный EDA датасета на выбор + отчёт в Jupyter" },
        ],
      },
    ],
  },
  {
    id: 2, title: "Классический ML", emoji: "⚙️", days: "31–90",
    color: "#0891b2", bg: "#ecfeff", border: "#a5f3fc",
    weeks: [
      {
        label: "Дни 31–45", subtitle: "Supervised Learning — регрессия и классификация",
        items: [
          { id: "2-1", day: "31–34", text: "Линейная регрессия: формула, градиентный спуск, MSE. Реализация с нуля на NumPy" },
          { id: "2-2", day: "35–37", text: "Sklearn: LinearRegression, train_test_split, метрики R², MAE, RMSE. Проект: цены на жильё" },
          { id: "2-3", day: "38–41", text: "Логистическая регрессия: сигмоида, cross-entropy. Проект: выживание на Titanic" },
          { id: "2-4", day: "42–44", text: "KNN, SVM: интуиция и применение. Сравнение моделей на одном датасете" },
          { id: "2-5", day: "45", text: "Overfitting/Underfitting: regularization (L1/L2), кривые обучения" },
        ],
      },
      {
        label: "Дни 46–65", subtitle: "Деревья, ансамбли и работа с данными",
        items: [
          { id: "2-6", day: "46–49", text: "Decision Tree: информационный выигрыш, Gini. Random Forest: bagging, feature importance" },
          { id: "2-7", day: "50–53", text: "Gradient Boosting: XGBoost, LightGBM. Практика: Kaggle Tabular Playground" },
          { id: "2-8", day: "54–57", text: "Feature Engineering: кодирование категорий, масштабирование, работа с пропусками" },
          { id: "2-9", day: "58–61", text: "Cross-validation: K-Fold, StratifiedKFold. Hyperparameter tuning: GridSearch, Optuna" },
          { id: "2-10", day: "62–65", text: "Unsupervised: K-Means, DBSCAN, PCA. Проект: кластеризация пользователей" },
        ],
      },
      {
        label: "Дни 66–90", subtitle: "Практика и первый Kaggle",
        items: [
          { id: "2-11", day: "66–70", text: "Полный ML-пайплайн: загрузка → EDA → препроцессинг → модель → оценка → итерации" },
          { id: "2-12", day: "71–78", text: "Курс: fast.ai Practical ML или Coursera ML Andrew Ng (недели 1–8)" },
          { id: "2-13", day: "79–85", text: "Первое Kaggle соревнование (Titanic или House Prices). Изучение топ-решений" },
          { id: "2-14", day: "86–90", text: "Ревизия: повторить слабые места, решить 15 задач на Leetcode Medium. Итоговый проект" },
        ],
      },
    ],
  },
  {
    id: 3, title: "Deep Learning", emoji: "🧠", days: "91–140",
    color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe",
    weeks: [
      {
        label: "Дни 91–110", subtitle: "Нейросети с нуля + PyTorch",
        items: [
          { id: "3-1", day: "91–94", text: "Математика DL: производные, chain rule, backpropagation вручную" },
          { id: "3-2", day: "95–99", text: "PyTorch: тензоры, autograd, первая нейросеть. Курс: fast.ai Lesson 1–3" },
          { id: "3-3", day: "100–104", text: "Полносвязные сети: архитектура, активации (ReLU, Softmax), dropout, batch norm" },
          { id: "3-4", day: "105–108", text: "Проект: классификация MNIST / Fashion-MNIST с нуля на PyTorch" },
          { id: "3-5", day: "109–110", text: "Оптимизаторы: SGD, Adam, learning rate schedulers. Практика" },
        ],
      },
      {
        label: "Дни 111–130", subtitle: "CNN — компьютерное зрение",
        items: [
          { id: "3-6", day: "111–115", text: "CNN: свёртки, пулинг, feature maps. Архитектуры: VGG, ResNet, EfficientNet" },
          { id: "3-7", day: "116–120", text: "Transfer Learning: fine-tuning предобученных моделей. Проект: классификация фото" },
          { id: "3-8", day: "121–125", text: "Аугментация данных: torchvision transforms, Albumentations. Data pipeline" },
          { id: "3-9", day: "126–130", text: "Проект: Image Classification на Kaggle (Animals/Flowers/CIFAR-10)" },
        ],
      },
      {
        label: "Дни 131–140", subtitle: "RNN и введение в NLP",
        items: [
          { id: "3-10", day: "131–134", text: "RNN, LSTM, GRU: интуиция и применение. Проект: предсказание временных рядов" },
          { id: "3-11", day: "135–138", text: "NLP-основы: токенизация, embeddings, Word2Vec. Sentiment Analysis" },
          { id: "3-12", day: "139–140", text: "Введение в Transformer: attention mechanism, self-attention. Статья «Attention is All You Need»" },
        ],
      },
    ],
  },
  {
    id: 4, title: "Специализация", emoji: "🚀", days: "141–180",
    color: "#059669", bg: "#ecfdf5", border: "#a7f3d0",
    weeks: [
      {
        label: "Дни 141–155", subtitle: "LLM и современный NLP / CV по выбору",
        items: [
          { id: "4-1", day: "141–145", text: "HuggingFace: Transformers, datasets, tokenizers. Fine-tuning BERT на классификацию" },
          { id: "4-2", day: "146–150", text: "Prompt Engineering, RAG (Retrieval-Augmented Generation) — основы LLM-приложений" },
          { id: "4-3", day: "151–155", text: "Выбор трека: углублённый NLP (GPT fine-tuning) ИЛИ Object Detection (YOLO, SAM)" },
        ],
      },
      {
        label: "Дни 156–170", subtitle: "MLOps и деплой",
        items: [
          { id: "4-4", day: "156–159", text: "Git + DVC: версионирование кода и данных. Структура ML-проекта" },
          { id: "4-5", day: "160–163", text: "Эксперименты: MLflow или W&B (Weights & Biases) — логирование метрик, артефактов" },
          { id: "4-6", day: "164–167", text: "FastAPI: создание REST API для модели. Docker: контейнеризация сервиса" },
          { id: "4-7", day: "168–170", text: "Деплой на HuggingFace Spaces или Render. Мониторинг модели" },
        ],
      },
      {
        label: "Дни 171–180", subtitle: "Итоговый проект + портфолио",
        items: [
          { id: "4-8", day: "171–175", text: "Финальный проект: end-to-end ML-система на реальных данных (идея → данные → модель → API → деплой)" },
          { id: "4-9", day: "176–178", text: "GitHub: README, notebooks, отчёты. Написать 2 статьи на Habr или Medium" },
          { id: "4-10", day: "179–180", text: "Ревизия резюме, подготовка к собеседованиям: ML-вопросы, система проектов" },
        ],
      },
    ],
  },
];

const STORAGE_KEY = "ml-plan-done";
const totalItems = phases.flatMap(p => p.weeks.flatMap(w => w.items)).length;

export default function MLPlan() {
  const [openPhase, setOpenPhase] = useState(null);
  const [openWeek, setOpenWeek] = useState({});
  const [done, setDone] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setDone(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const save = (newDone) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newDone)); } catch (_) {}
  };

  const toggleDone = (e, itemId, itemText) => {
    e.stopPropagation();
    const newDone = { ...done, [itemId]: !done[itemId] };
    setDone(newDone);
    save(newDone);
    if (!done[itemId]) {
      const short = itemText.length > 40 ? itemText.slice(0, 40) + "…" : itemText;
      setToast("✅ Готово: " + short);
      setTimeout(() => setToast(null), 2500);
    }
  };

  const doneCount = Object.values(done).filter(Boolean).length;
  const progressPct = Math.round((doneCount / totalItems) * 100);
  const getPhaseP = (phase) => { const items = phase.weeks.flatMap(w => w.items); return { done: items.filter(it => done[it.id]).length, total: items.length }; };
  const getWeekP = (week) => ({ done: week.items.filter(it => done[it.id]).length, total: week.items.length });
  const togglePhase = (id) => { setOpenPhase(openPhase === id ? null : id); setOpenWeek({}); };
  const toggleWeek = (pid, wi) => { const k = pid+"-"+wi; setOpenWeek(p => ({ ...p, [k]: !p[k] })); };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh", paddingBottom: 48 }}>
      {toast && (
        <div style={{ position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)", background:"#1e293b", color:"#fff", padding:"12px 20px", borderRadius:12, fontSize:13.5, fontWeight:500, zIndex:1000, boxShadow:"0 4px 20px #0003", whiteSpace:"nowrap", maxWidth:"90vw" }}>
          {toast}
        </div>
      )}

      <div style={{ background:"linear-gradient(135deg,#1e1b4b,#312e81 60%,#4f46e5)", color:"#fff", padding:"36px 24px 28px", textAlign:"center" }}>
        <div style={{ fontSize:12, letterSpacing:"0.15em", textTransform:"uppercase", color:"#a5b4fc", marginBottom:8, fontWeight:600 }}>твой путь в ML</div>
        <h1 style={{ margin:0, fontSize:"clamp(24px,5vw,38px)", fontWeight:800, lineHeight:1.15 }}>
          180 дней до<br /><span style={{ color:"#a5b4fc" }}>Machine Learning</span>
        </h1>
        <p style={{ color:"#c7d2fe", fontSize:14, maxWidth:440, margin:"12px auto 0" }}>От Python до деплоя нейросетей. CS50 засчитан ✅</p>
        <div style={{ marginTop:24, maxWidth:440, margin:"24px auto 0" }}>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
            <span style={{ fontSize:13, color:"#a5b4fc", fontWeight:600 }}>Общий прогресс</span>
            <span style={{ fontSize:13, color:"#fff", fontWeight:700 }}>{doneCount}/{totalItems} · {progressPct}%</span>
          </div>
          <div style={{ background:"rgba(255,255,255,0.15)", borderRadius:99, height:10, overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(90deg,#818cf8,#a5b4fc)", borderRadius:99, height:10, width:`${Math.max(progressPct,1)}%`, transition:"width 0.4s" }} />
          </div>
          <div style={{ display:"flex", justifyContent:"space-around", marginTop:14 }}>
            {phases.map(p => { const pp = getPhaseP(p); return (
              <div key={p.id} style={{ textAlign:"center" }}>
                <div style={{ fontSize:18 }}>{p.emoji}</div>
                <div style={{ fontSize:10, color:"#c7d2fe", marginTop:2, fontWeight:600 }}>{pp.done}/{pp.total}</div>
              </div>
            ); })}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:720, margin:"0 auto", padding:"0 14px" }}>
        <div style={{ marginTop:28, display:"flex", flexDirection:"column", gap:14 }}>
          {phases.map(phase => {
            const isOpen = openPhase === phase.id;
            const pp = getPhaseP(phase);
            const pct = Math.round((pp.done/pp.total)*100);
            const allDone = pp.done === pp.total;
            return (
              <div key={phase.id} style={{ borderRadius:16, border:`2px solid ${isOpen ? phase.color : allDone ? phase.color+"88" : phase.border}`, background:"#fff", overflow:"hidden", boxShadow: isOpen ? `0 4px 24px ${phase.color}22` : "0 1px 4px #0001" }}>
                <button onClick={() => togglePhase(phase.id)} style={{ width:"100%", display:"flex", alignItems:"center", gap:12, padding:"16px 18px", background: isOpen ? phase.bg : "#fff", border:"none", cursor:"pointer", textAlign:"left" }}>
                  <div style={{ width:42, height:42, borderRadius:12, background:phase.bg, border:`2px solid ${phase.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                    {allDone ? "✅" : phase.emoji}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                      <span style={{ fontSize:11, fontWeight:700, color:phase.color, textTransform:"uppercase", letterSpacing:"0.1em" }}>Фаза {phase.id}</span>
                      <span style={{ fontSize:11, color:"#94a3b8", background:"#f1f5f9", borderRadius:99, padding:"2px 7px" }}>дни {phase.days}</span>
                      <span style={{ fontSize:11, color: allDone ? "#059669" : phase.color, background: allDone ? "#dcfce7" : phase.bg, borderRadius:99, padding:"2px 7px", fontWeight:700 }}>{pp.done}/{pp.total}</span>
                    </div>
                    <div style={{ fontWeight:700, fontSize:16, color:"#1e293b", marginTop:2 }}>{phase.title}</div>
                    <div style={{ marginTop:6, background:"#f1f5f9", borderRadius:99, height:4, overflow:"hidden" }}>
                      <div style={{ background:phase.color, height:4, borderRadius:99, width:`${Math.max(pct, pct>0?4:0)}%`, transition:"width 0.3s" }} />
                    </div>
                  </div>
                  <div style={{ color:phase.color, fontSize:20, fontWeight:300, flexShrink:0 }}>{isOpen ? "−" : "+"}</div>
                </button>

                {isOpen && (
                  <div style={{ padding:"0 14px 14px" }}>
                    {phase.weeks.map((week, wi) => {
                      const wk = phase.id+"-"+wi;
                      const wOpen = openWeek[wk];
                      const wp = getWeekP(week);
                      const wDone = wp.done === wp.total;
                      return (
                        <div key={wi} style={{ marginTop:10, borderRadius:12, border:`1.5px solid ${wDone ? phase.color+"66" : phase.border}`, overflow:"hidden" }}>
                          <button onClick={() => toggleWeek(phase.id, wi)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 14px", background: wOpen ? phase.bg : "#fafafa", border:"none", cursor:"pointer", textAlign:"left" }}>
                            <div style={{ flex:1, minWidth:0 }}>
                              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                                <span style={{ fontWeight:700, fontSize:13.5, color:"#1e293b" }}>{week.label}</span>
                                <span style={{ fontSize:11, color: wDone?"#059669":"#94a3b8", background: wDone?"#dcfce7":"#f1f5f9", borderRadius:99, padding:"1px 6px", fontWeight:600 }}>{wp.done}/{wp.total}</span>
                              </div>
                              <div style={{ fontSize:12, color:"#64748b", marginTop:1 }}>{week.subtitle}</div>
                            </div>
                            <span style={{ color:phase.color, fontSize:18, flexShrink:0, marginLeft:8 }}>{wOpen?"−":"+"}</span>
                          </button>

                          {wOpen && (
                            <div style={{ padding:"6px 14px 14px" }}>
                              {week.items.map(item => {
                                const isDone = !!done[item.id];
                                return (
                                  <div key={item.id} onClick={e => toggleDone(e, item.id, item.text)}
                                    style={{ display:"flex", gap:12, marginTop:10, alignItems:"flex-start", cursor:"pointer", padding:"10px 12px", borderRadius:10, background: isDone ? phase.bg : "#f8fafc", border:`1.5px solid ${isDone ? phase.color+"55" : "#e2e8f0"}`, transition:"all 0.15s" }}>
                                    <div style={{ width:22, height:22, borderRadius:6, flexShrink:0, border:`2px solid ${isDone ? phase.color : "#cbd5e1"}`, background: isDone ? phase.color : "#fff", display:"flex", alignItems:"center", justifyContent:"center", marginTop:1 }}>
                                      {isDone && <span style={{ color:"#fff", fontSize:13, lineHeight:1 }}>✓</span>}
                                    </div>
                                    <div style={{ flex:1 }}>
                                      <div style={{ fontSize:11, fontWeight:700, color: isDone ? phase.color : "#94a3b8", marginBottom:2 }}>День {item.day}</div>
                                      <div style={{ fontSize:13.5, color: isDone?"#64748b":"#334155", lineHeight:1.55, textDecoration: isDone?"line-through":"none" }}>{item.text}</div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop:28, borderRadius:16, border:"2px solid #e2e8f0", background:"#fff", padding:"18px 18px 22px" }}>
          <div style={{ fontWeight:800, fontSize:16, color:"#1e293b", marginBottom:3 }}>📚 Ключевые ресурсы</div>
          <div style={{ fontSize:12, color:"#64748b", marginBottom:14 }}>Всё бесплатно или почти бесплатно</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:10 }}>
            {[
              { label:"Python", items:["CS50P (уже начала!)","Automate the Boring Stuff"] },
              { label:"ML теория", items:["Andrew Ng ML Coursera","fast.ai Practical DL"] },
              { label:"Математика", items:["3Blue1Brown (YouTube)","Khan Academy Statistics"] },
              { label:"Практика", items:["Kaggle.com","Leetcode Easy→Medium"] },
              { label:"DL / PyTorch", items:["PyTorch официальный туториал","fast.ai Part 1"] },
              { label:"NLP / LLM", items:["HuggingFace Course","Andrej Karpathy YouTube"] },
            ].map((r,i) => (
              <div key={i} style={{ background:"#f8fafc", borderRadius:10, padding:"11px 13px", border:"1.5px solid #e2e8f0" }}>
                <div style={{ fontWeight:700, fontSize:12, color:"#475569", marginBottom:5 }}>{r.label}</div>
                {r.items.map((it,j) => <div key={j} style={{ fontSize:12, color:"#64748b", marginTop:3, paddingLeft:9, borderLeft:"2px solid #cbd5e1" }}>{it}</div>)}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop:16, borderRadius:16, background:"linear-gradient(135deg,#fdf4ff,#f0fdf4)", border:"2px solid #e9d5ff", padding:"16px 18px" }}>
          <div style={{ fontWeight:800, fontSize:15, color:"#1e293b", marginBottom:10 }}>💡 Советы по режиму</div>
          {["🕐  1.5–2 часа в день достаточно — главное стабильность, не марафоны","📒  Веди Notion/Obsidian дневник: что узнала, что не поняла, вопросы","💻  Правило 50/50: половина времени — теория, половина — код руками","🏆  Kaggle с дня 79 — даже плохой результат даёт опыт реальных данных","🔄  Каждые 30 дней — «ревизия»: повтори темы, где были пробелы"].map((t,i) => (
            <div key={i} style={{ fontSize:13, color:"#374151", lineHeight:1.55, marginTop: i?6:0 }}>{t}</div>
          ))}
        </div>

        <div style={{ marginTop:16, textAlign:"center", fontSize:11, color:"#94a3b8" }}>
          Прогресс сохраняется в браузере · Нажми на тему чтобы отметить ✓
        </div>
      </div>
    </div>
  );
}
