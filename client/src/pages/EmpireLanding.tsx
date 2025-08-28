import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Crown,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Brain,
  Target,
  Rocket,
  Star,
  ChevronRight,
  Play,
  BarChart3,
  Users,
  DollarSign,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmpireHeader from "@/components/enterprise/EmpireHeader";

interface EmpireLandingProps {
  onNavigate: (path: string) => void;
}

export default function EmpireLanding({ onNavigate }: EmpireLandingProps) {
  const [currentStats, setCurrentStats] = useState({
    revenue: 0,
    users: 0,
    conversions: 0,
    uptime: 99.9
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStats({
        revenue: 2847329,
        users: 89432,
        conversions: 34.7,
        uptime: 99.99
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const empireFeatures = [
    {
      icon: Crown,
      title: "Empire Command Center",
      description: "Centralized control over all revenue streams, analytics, and operations",
      gradient: "from-yellow-400 to-yellow-600",
      stats: "15+ Revenue Channels"
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Autonomous decision making with machine learning optimization",
      gradient: "from-purple-400 to-purple-600",
      stats: "97% Accuracy Rate"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption with multi-layer threat protection",
      gradient: "from-blue-400 to-blue-600",
      stats: "Zero Breaches"
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Real-time conversion tracking and automated A/B testing",
      gradient: "from-green-400 to-green-600",
      stats: "+847% Growth"
    }
  ];

  const revenueStreams = [
    { name: "Affiliate Networks", value: 42, color: "bg-blue-500" },
    { name: "Digital Products", value: 28, color: "bg-green-500" },
    { name: "SaaS Solutions", value: 18, color: "bg-purple-500" },
    { name: "Consulting", value: 12, color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <EmpireHeader onNavigate={onNavigate} currentPath="/" />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
        style={{ y, opacity }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                <Star className="h-4 w-4 mr-2" />
                Billion-Dollar Empire Architecture
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                FINDAWISE
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">
                Digital Empire
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade AI-powered platform managing multiple revenue streams,
              automated conversions, and global market expansion
            </p>
          </motion.div>

          {/* Real-time Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-5 w-5 text-green-400" />
                <span className="text-xs text-gray-400">Revenue</span>
              </div>
              <div className="text-2xl font-bold text-green-400">
                ${currentStats.revenue.toLocaleString()}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-xs text-gray-400">Active Users</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">
                {currentStats.users.toLocaleString()}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-5 w-5 text-purple-400" />
                <span className="text-xs text-gray-400">Conversion</span>
              </div>
              <div className="text-2xl font-bold text-purple-400">
                {currentStats.conversions}%
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-xs text-gray-400">Uptime</span>
              </div>
              <div className="text-2xl font-bold text-green-400">
                {currentStats.uptime}%
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => onNavigate("/empire")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-8 py-4 text-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
            >
              <Crown className="h-5 w-5 mr-2" />
              Enter Empire Dashboard
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Empire Features */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Empire
              </span>{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with enterprise-grade architecture to handle billion-dollar operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {empireFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient}`}>
                        <feature.icon className="h-6 w-6 text-black" />
                      </div>
                      <Badge variant="outline" className="border-white/20 text-gray-400">
                        {feature.stats}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Analytics */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Multi-Vertical</span>{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Revenue Engine
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Diversified income streams across finance, health, SaaS, travel, and AI tools
                with automated optimization and real-time performance tracking.
              </p>
              
              <div className="space-y-6">
                {revenueStreams.map((stream, index) => (
                  <motion.div
                    key={stream.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${stream.color}`} />
                      <span className="text-white font-medium">{stream.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${stream.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stream.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-gray-400 w-12 text-right">{stream.value}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => onNavigate("/revenue")}
                className="mt-8 bg-gradient-to-r from-green-400 to-green-600 text-black font-bold hover:from-green-300 hover:to-green-500"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                View Revenue Analytics
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Live Revenue Dashboard</h3>
                  <p className="text-gray-400 text-sm">Real-time performance metrics</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-gray-300">Today's Revenue</span>
                    <span className="text-green-400 font-bold">$23,847</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-gray-300">Active Conversions</span>
                    <span className="text-blue-400 font-bold">127</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
                    <span className="text-gray-300">AI Optimization</span>
                    <span className="text-purple-400 font-bold">+34.7%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {" "}Digital Empire?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the next generation of entrepreneurs building billion-dollar enterprises
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate("/empire")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-12 py-6 text-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
            >
              <Rocket className="h-6 w-6 mr-3" />
              Launch Empire Dashboard
              <ChevronRight className="h-6 w-6 ml-3" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}