// PortfolioModalHeader.tsx (placement)
const [volume, setVolume] = useState<VolumeSummary | null>(null);
useEffect(() => { getVolumeSummary(slug).then(setVolume).catch(() => setVolume(null)); }, [slug]);

<h2 className="text-sm lg:text-base font-semibold text-zinc-900 dark:text-white truncate">
  {name} · Estimated portfolio
  {volume && <> · Volume: {formatUsdCompact(volume.mid)}</>}
</h2>